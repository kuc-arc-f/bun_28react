import React from 'react';
import ReactDOM from 'react-dom/client';
import Head from '../components/Head'
//
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
//
function Page() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  //
  return (
  <div className="container mx-auto my-2 px-8 bg-white">
    <Head />
    <h1 className="text-4xl text-gray-700 font-bold my-2"
    >Calendar</h1>
    <hr className="my-2" />
    <div className="">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className=""
      />
    </div>
  </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Page />
  )