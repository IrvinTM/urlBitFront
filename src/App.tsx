import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"



function App() {
  return (
    <div className="flex justify-center flex-col items-center pt-8">
      <h1 className="font-extrabold text-3xl font-mono font text-center px-2">Want to tell everyone you use Arch (btw)?</h1>
      <h1 className="font-extrabold text-3xl font-mono">We got you</h1>
      <div id="formurl">
        <Card className="p-6 m-6 w-[600px]  ">
          <div className="flex pb-4">
          <Input className="h-14"/>
            <Button className="h-14">Shorten</Button>
          </div>
          <span className="text-lg font-mono ">
          URLBIT is a free tool to shorten URLs and at the same time  and most important tell everyone you use Arch (btw)
          
          </span>
        </Card>
        <Card className="p-6 m-6 w-[600px]  ">
        <h1 className="font-extrabold text-2xl pb-2 font-mono">Want more ?</h1>
        <div className="text-lg font-mono">
        <span className="pb-2">You can<Button className="text-slate-700 text-lg font-mono" variant={"link"}>create an account</Button>and manage your urls</span>
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
