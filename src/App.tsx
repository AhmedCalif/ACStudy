import './App.css'
import { LoginButton } from './components/LoginButton'
import { RegisterButton } from './components/RegisterButton'

export default function App() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <img 
        src="/backgroundImage.jpg"
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className='absolute inset-0 flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold font-comfortaa mb-4'>ACStudy</h1>
        <div className="flex gap-4"> 
          <LoginButton />
          <RegisterButton />
        </div>
      </div>
    </div>
  )
}