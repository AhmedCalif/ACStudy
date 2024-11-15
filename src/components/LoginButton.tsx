"use client"
import {Button} from "../components/ui/button"
import {useKindeAuth} from '@kinde-oss/kinde-auth-react';


export function LoginButton () {
    const { login } = useKindeAuth();

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      login();
    }
    return (
        <>
      <Button onClick={handleLogin} type="button" className="font-bold font-comfortaa bg-orange-500 text-black">Sign In</Button>
        </>
    )
}