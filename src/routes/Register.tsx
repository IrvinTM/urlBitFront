import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Register(){
    return(
        <div className="flex justify-center content-center pt-12">
            <Card className="flex justify-center text-center content-center flex-col p-4 w-[400px]">
                <h1 className="font-mono text-2xl">Register</h1>
                <span className="pb-14 text-mono text-gray-600">Enter your information to create an account</span>
                <strong className="text-left pb-2">Full name:</strong>
                <Input type="text" placeholder="Jon Doe" className="pb-2"/>
                <strong className="text-left pb-2 pt-2">Email:</strong>
                <Input type="email" placeholder="email@example.com" className="pb-2"/>
                <strong className="text-left pb-2 pt-2">Password:</strong>
                <Input type="password"  className="pb-2"/>
                <strong className="text-left pb-2 pt-2">Confirm Password:</strong>
                <Input type="password" className="pb-2"/>
                <Button  className="mt-6" variant={"default"}> Register</Button>
            </Card>
        </div>
    )

}