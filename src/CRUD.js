import React, { useState, useEffect, Fragment } from "react";

const CRUD = () => {

    const empdata = [
        {
            id: 1,
            name: "Manoj",
            age: 29,
            isActive: 1
        },
        {
            id: 2,
            name: "Virat",
            age: 30,
            isActive: 1
        },
        {
            id: 3,
            name: "Rohit",
            age: 34,
            isActive: 0
        },
    ]

    const [data, setData] = useEffect([])

    useEffect(() => {
        setData(empdata);
    }, [])

    return (
        <Fragment>
            <div>CRUD</div>
        </Fragment>

    )
}

export default CRUD;