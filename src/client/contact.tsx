import React from 'react';
import ReactDOM from 'react-dom/client';
import Head from '../components/Head'
//
function Page() {
    return (
    <div className="container mx-auto my-2 px-8 bg-white">
        <Head />
        <h1 className="text-4xl text-gray-700 font-bold my-2"
        >contact</h1>
    </div>
    )
}
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Page />
  )