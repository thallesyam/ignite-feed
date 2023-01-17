import style from "./style.module.css"

export function Avatar({ avatarUrl }) {
  return <img className={style.avatar} src={avatarUrl} />
}
