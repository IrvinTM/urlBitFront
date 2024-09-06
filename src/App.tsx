import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import {ApiResponse} from "src/types/types.ts"
import logo from "./assets/arch.png"
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Bar from "./components/ui/Bar";

function App() {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const baseUrl = "http://archbtw.site"

  async function createFreeUrl(url:string){
    setLoading(true)
    if(isValidUrl(url)){
      try{
        const response = await fetch("https://archbtw.site/api/freeurl", {
          method: "POST",
          body: JSON.stringify({address: url})
        })
        const  resText = await response.text()
        const parsed:ApiResponse = await JSON.parse(resText)
        if(!parsed.status){
            toast.error(parsed.message)
        }else{
          setShortUrl(parsed.url?.short_url ?? "")
          console.log("este es el short url del response ", parsed.url?.short_url)
          console.log("este es el shorturl var ",shortUrl)
        }
        
      }
      catch(err){
        console.log(err)
      }
    }
    else{
      toast.error("Invalid Url")
      setLoading(false)
      return
    }
    setLoading(false)
  }
  function isValidUrl(url:string) {
    try {
      new URL(url);
      return true;
    } catch (err) {
      return false;
    }
  }
  return (
    <div>
      <Bar/>
      <div className="flex justify-center flex-col items-center pt-8 dark:bg-slate-800">
      <div className="flex md:items-center flex-col md:flex-row content-center justify-center items-center">
  <h1 className="font-extrabold text-3xl font-mono font text-center px-2 md:mb-0">Want to tell everyone you use</h1>
  <img className="md:w-12 md:h-12 w-32 h-32 mb-2 md:mt-0 mt-2" src={logo} alt="archlogo" />
  <span className="font-extrabold text-3xl font-mono font text-center px-2">(btw)?</span>
</div>
      <h1 className="font-extrabold text-3xl text-[#0b9adb] font-mono">We got you</h1>
      <div id="formurl">
        <Card className="p-6 m-6 max-w-[600px]  ">
          <div className="flex pb-4">
          <Input 
          value={url}
          placeholder="https://example.com"
          className="h-14"
          onChange={(e)=> setUrl(e.target.value)}/>
            <Button 
            className="h-14 bg-[#0b9adb]"
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
          {shortUrl && <div className="mt-2 mb-4">
            <span>Your shortened url is <a target="_blank" className="text-[#0b9adb]" href={`${baseUrl}/${shortUrl}`}>{`${baseUrl}/${shortUrl}`}</a></span>
          </div> }
      </div>
          </div>
          <span className="text-lg font-mono">
          URLBIT is a free tool to shorten URLs and at the same time  and most important tell everyone you use Arch (btw)
          
          </span>
        </Card>
        <Card className="p-6 m-6 max-w-[600px]  ">
        <h1 className="font-extrabold text-2xl pb-2 font-mono">Want more ?</h1>
        <div className="text-lg font-mono">
        <span className="pb-2">You can
        <Button
        className="text-[#0b9adb] text-lg font-mono"
        variant={"link"}>
          <a href="/register">create an account</a>

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
    <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Slide}
/>
    </div>
  );
}

export default App;
