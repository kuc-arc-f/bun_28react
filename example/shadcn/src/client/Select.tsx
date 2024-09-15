import React from 'react';
import ReactDOM from 'react-dom/client';
import Head from '../components/Head'

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
//
function Page() {
  return (
  <div className="container mx-auto my-2 px-8 bg-white">
    <Head />
    <h1 className="text-4xl text-gray-700 font-bold my-2"
    >Select</h1>
    <hr className="my-2" />
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="framework">SelectItems</Label>
      <Select>
        <SelectTrigger id="framework">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="item_1">item_1</SelectItem>
          <SelectItem value="item_2">item_2</SelectItem>
          <SelectItem value="item_3">item_3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Page />
  )