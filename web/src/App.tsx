import './styles/global.css';

 import { Habit } from "./components/Habit"

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Habit completed={3}/>
      </div>
    </div>
  )
}