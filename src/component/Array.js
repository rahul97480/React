import React from 'react'
import {Table} from 'react-bootstrap';

function Array() {
    // const names = ['abc', 'def', 'asd', 'aasd'];
    const data= [
        {name:"abc" , email:"sadd@dsf", contact:"100", address:[
            {Hn: "10", city: "West Bengal", Country:"India" },
            {Hn: "11", city: "Orrisa", Country:"India" },
            {Hn: "12", city: "Andhra Pardesh", Country:"India" },
        ]},
        {name:"abc" , email:"sadd@dsf", contact:"100" ,address:[
            {Hn: "10", city: "West Bengal", Country:"India" },
            {Hn: "11", city: "Orrisa", Country:"India" },
            {Hn: "12", city: "Andhra Pardesh", Country:"India" },
        ]},
        {name:"abc" , email:"sadd@dsf", contact:"100", address:[
            {Hn: "10", city: "West Bengal", Country:"India" },
            {Hn: "11", city: "Orrisa", Country:"India" },
            {Hn: "12", city: "Andhra Pardesh", Country:"India" },
        ]},
    ]
    // names.map((items)=>{
        // console.log(items)
    // })
    return (
        <div>
            <h1>Table </h1>
            <Table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Contat</td>
                        <td>Address</td>
                    </tr>
                </tbody>
                    <tbody>
                        {data.map((details)=>
                         <tr>
                            <td>{details.name}</td>
                            <td>{details.email}</td>
                            <td>{details.contact}</td>
                            <td>{details.address.map((detailer)=>
                                <tr>
                                    <td>{detailer.Hn}</td>
                                    <td>{detailer.city}</td>
                                    <td>{detailer.Country}</td>
                                </tr>
                            )}</td>
                        </tr>
                        )}
                    </tbody>
            </Table>

        </div>
    )
}

export default Array
// return supports map function but  
//doesnot supports for loop 
