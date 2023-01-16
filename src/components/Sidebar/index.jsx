import { PencilLine } from "phosphor-react"
import style from "./style.module.css"

const backgroundUrl =
  "https://images.unsplash.com/photo-1617900906639-cab7adceb499?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"

const userImageUrl = "https://github.com/thallesyam.png"

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img className={style.cover} src={backgroundUrl} />

      <div className={style.profile}>
        <img className={style.avatar} src={userImageUrl} />
        <strong>Thalles Ian</strong>
        <span>Frontend Developer</span>
      </div>

      <footer>
        <a href="">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
