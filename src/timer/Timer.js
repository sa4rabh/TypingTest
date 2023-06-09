import React from 'react'
import { Outlet } from 'react-router-dom'
import LocalHeader from './LocalHeader'
import Header from '../components/Header';

export default function Timer() {
    return (
        <div>
            <Outlet />
            <Header />
            <LocalHeader style={{ marginTop: "100px" }} />
        </div>
    )
}
