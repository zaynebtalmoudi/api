import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './user.css'

export default function UserList() {
    const [listOfUser, setlistOfUser] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setlistOfUser(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])





    return (
        <>
            <div>
                <Container>
                    <h1 className='text-center mt-4'>Users List </h1>

                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th> Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Adress</th>
                                <th>Phone</th>
                                <th>Website</th>
                                <th>Company</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listOfUser.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <tr>
                                            {item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}
                                        </tr>
                                        <tr>
                                            {item.address.geo.lat}  {item.address.geo.lng}
                                        </tr>
                                    </td>
                                    <td>{item.phone}</td>
                                    <td> {item.website} </td>
                                    <td><tr>
                                        <b>{item.company.name}</b>
                                    </tr>
                                        <tr>
                                            " {item.company.catchPhrase}
                                        </tr>
                                        <tr>
                                            {item.company.bs} "
                                        </tr>
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </Table>
                </Container>
            </div >


        </>
    )
}
