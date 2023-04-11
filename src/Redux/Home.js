import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { tempdata } from './Action/Action';

function Home() {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const [perpage, setPerpage] = useState(100)

    const data = useSelector((ele) => ele?.fakeData?.tempData?.data)
    useEffect(() => {
        dispatch(tempdata())
    }, [])

    var tempData = data?.slice(((page - 1) * perpage), ((page - 1) * perpage) + perpage)
    const handelCilck = () => {
        setPage(page + 1)
    }


    return (
        <div>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Last Name</th>
                        <th>Username</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        tempData?.map((item) => {
                            return (
                                <>
                                    <tr>
                                        <td>{item?.id}</td>
                                        <td>{item?.email}</td>
                                        <td>{item?.postId}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>

            </Table>
            <div className='footer_button'>
                <button>{"<"}</button>
                <button disabled onClick={() => handelCilck()}>{">"}</button>
                <select onChange={(e) => setPerpage(e.target.value)}>
                    <option value={"10"}>10</option>
                    <option value={"200"}>200</option>
                    <option value={"300"}>300</option>
                    <option value={"400"}>400</option>
                    <option value={"500"}>500</option>
                </select>
                {/* <input type="text" onChange={(e) => setPerpage(e.target.value)} /> */}
            </div>
        </div >
    )
}

export default Home