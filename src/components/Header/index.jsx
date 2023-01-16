import style from "./style.module.css"

import igniteLogo from "../../assets/ignite-logo.svg"

export function Header() {
  return (
    <header className={style.header}>
      <div>
        <img src={igniteLogo} alt="Logotipo do ignite" />
        <h1>Ignite Feed</h1>
      </div>
    </header>
  )
}
