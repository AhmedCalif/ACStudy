"use client"
import {Button} from "../components/ui/button"
import {useKindeAuth} from '@kinde-oss/kinde-auth-react';


export function LogoutButton () {
    const { logout } = useKindeAuth();

    const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      logout();
    }
    return (
        <>
      <Button onClick={handleLogout} type="button" className="font-bold font-comfortaa bg-orange-500 text-black">Sign In</Button>
        </>
    )
}