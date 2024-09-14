import React from 'react';
import ReactDOM from 'react-dom/client';
import Head from '../components/Head'
//
function Page() {
  return (
    <>
    <div className="main_body_wrap container mx-auto my-2 px-8 bg-white">
      {/* navi */}
      <Head />
      {/* items */}
      <h1 className="text-4xl font-bold">home!</h1>
      <hr className="my-2" />
    </div>
    
  </>
  )
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Page />
)
