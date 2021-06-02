import React,{useEffect,useState} from 'react'
function GetApi() {
  const [users, setUser] = useState([])
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId,setUserId]=useState(null)
  useEffect(()=>{
    getList()
  },[])

  function getUsers() {
    fetch("http://localhost:4000/todo").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
        setUserId(resp[0].userId)
        setTitle(resp[0].title)
        setBody(resp[0].body)
      })
    })
  }

    function getList(){
        fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setUser(resp)
      })
    })
    }

    function selectUser(id)
    {
        let item=users[id-1];
        setBody(item.body)
        setTitle(item.title)
        setUserId(item.userId)
    }

        function updateUser()
        {
          let item={userId,title,body}
          console.log(item);
          console.warn("item",item)
          fetch(`API_LINK/${userId}`, {
            method: 'PUT',
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            body:JSON.stringify(item)
          }).then((result) => {
            result.json().then((resp) => {
              console.warn(resp)
              getUsers()
            })
          })
        }

    function DeleteData(id){
        fetch(`API_LINK/${id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp);
                getList()
            })
        })
    }
  //console.warn(users)
  return (
    <div className="App">
      <h1>Get API Call </h1>
      <table border="1">
       <tbody>
       <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Mobile</td>
          <td>Update</td>
          <td>Delete</td>
        </tr>
        {
          users.map((item,i)=>
            <tr key={i}>
            <td>{item.userId}</td>
          <td>{item.id}</td>
          <td>{item.title}</td>
            <td>{item.body}</td>
            <td><button onClick={()=> DeleteData(item.id)}>Delete</button></td>
            <td><button onClick={() => selectUser(item.id)}>Update</button></td>
          </tr>
          )
        }
       </tbody>
      </table>
      <div>
      <input type="text" value={userId} onChange={(e)=>{setUserId(e.target.value)}} /> <br /><br />
        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} /> <br /><br />
        <input type="text" value={body}  onChange={(e)=>{setBody(e.target.value)}} /> <br /><br />
        <button  onClick={updateUser}>Update User</button>  
      </div>
    </div>
  );
}
export default GetApi;