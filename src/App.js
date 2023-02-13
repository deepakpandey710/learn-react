import { Component, useState } from 'react';
import './App.css';
import { Tab, Table } from 'react-bootstrap'
function App() {
    const user = [
        {
            name: "riya", email: 'abc@test.com', address: [
                { hn: '232', city: 'basti', country: 'India' },
                { hn: '212', city: 'noida', country: 'India' },
                { hn: '562', city: 'newyork', country: 'India' }
            ]
        },
        {
            name: "ritik", email: 'abc@test.com', address: [
                { hn: '232', city: 'gkpi', country: 'India' },
                { hn: '212', city: 'dublini', country: 'India' },
                { hn: '562', city: 'newyork', country: 'India' }
            ]
        },
        {
            name: "deepak", email: 'abc@test.com', address: [
                { hn: '232', city: 'bangalore', country: 'India' },
                { hn: '212', city: 'siliconvalley', country: 'India' },
                { hn: '562', city: 'amsterdam', country: 'India' }
            ]
        }
    ]
    return (
        <div className='App'>
            <h1>Listing Nested Component</h1>
            <Table border='1' variant="dark"  >
                <tbody>
                    <tr>
                        <td>S.No.</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Address</td>
                    </tr>
                    {
                        user.map((item,i) =>
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Table variant="dark" striped>
                                        <tbody>
                                            {
                                                item.address.map((data,j) =>
                                                    <tr key={j}>
                                                        <td>{data.hn}</td>
                                                        <td>{data.city}</td>
                                                        <td>{data.country}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

        </div>
    )
}

export default App;

