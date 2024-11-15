"use client"
import {Button} from "../components/ui/button"
import {useKindeAuth} from '@kinde-oss/kinde-auth-react';


export function RegisterButton () {
    const { register } = useKindeAuth();

    const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      register();
    }
    return (
        <>
      <Button onClick={handleRegister} type="button" className="font-bold font-comfortaa bg-orange-500 text-black">Sign Up</Button>
        </>
    )
}