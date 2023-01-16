import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import style from "./app.module.css"
import "./styles/global.css"

export function App() {
  return (
    <div className="App">
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>aaa</main>
      </div>
    </div>
  )
}
