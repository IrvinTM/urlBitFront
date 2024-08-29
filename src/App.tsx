import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React, { useState } from "react";
import {ApiResponse} from "src/types/types.ts"




function App() {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const baseUrl = "http://archbtw.site"

  async function createFreeUrl(url:string){
    setLoading(true)
    try{
      const response = await fetch("http://localhost:3000/api/freeurl", {
        method: "POST",
        body: JSON.stringify({address: url})
      })
      const  resText = await response.text()
      const parsed:ApiResponse = await JSON.parse(resText)
      if(!parsed.status){
          alert(parsed.message)
      }else{
        setShortUrl(parsed.url?.short_url ?? "")
        console.log("este es el short url del response ", parsed.url?.short_url)
        console.log("este es el shorturl var ",shortUrl)
      }
      
    }
    catch(err){
      console.log(err)
    }
    setLoading(false)
  }

  return (
    <div className="flex justify-center flex-col items-center pt-8">
      <h1 className="font-extrabold text-3xl font-mono font text-center px-2">Want to tell everyone you use Arch (btw)?</h1>
      <h1 className="font-extrabold text-3xl font-mono">We got you</h1>
      <div id="formurl">
        <Card className="p-6 m-6 w-[600px]  ">
          <div className="flex pb-4">
          <Input 
          value={url}
          className="h-14"
          onChange={(e)=> setUrl(e.target.value)}/>
            <Button 
            className="h-14"
            onClick={()=>{createFreeUrl(url)}}
            >Shorten</Button>
          </div>
          <div className="flex justify-center items-center">
          <div>
        {loading ? (
            <div className="w-40 h-40">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <circle fill="#000000" stroke="#000000" strokeWidth="15" r="15" cx="40" cy="100">
                  <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
                </circle>
                <circle fill="#000000" stroke="#000000" strokeWidth="15" r="15" cx="100" cy="100">
                  <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
                </circle>
                <circle fill="#000000" stroke="#000000" strokeWidth="15" r="15" cx="160" cy="100">
                  <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
                </circle>
              </svg>
            </div>
          ) : (
            <div>
              
            </div>
          )}
          {shortUrl && <div>
            <span>Your shortened url is {`${baseUrl}/${shortUrl}`}</span>
          </div> }
      </div>
          </div>
          <span className="text-lg font-mono ">
          URLBIT is a free tool to shorten URLs and at the same time  and most important tell everyone you use Arch (btw)
          
          </span>
        </Card>
        <Card className="p-6 m-6 w-[600px]  ">
        <h1 className="font-extrabold text-2xl pb-2 font-mono">Want more ?</h1>
        <div className="text-lg font-mono">
        <span className="pb-2">You can
        <Button
        className="text-slate-700 text-lg font-mono"
        variant={"link"}>create an account

        </Button>and manage your urls</span>
        <br />
        <span>You will be able to:</span>
        <span> <br />-Check how many people has clicked your URLS
          <br />-Manage the urls you have registered
          <br />-Get the shortURL in case you forget it
        </span>
        </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
