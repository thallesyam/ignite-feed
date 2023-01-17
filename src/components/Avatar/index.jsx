import style from "./style.module.css"

export function Avatar({ avatarUrl, hasBorder = true }) {
  return (
    <img
      className={hasBorder ? style.avatarWithBorder : style.avatar}
      src={avatarUrl}
    />
  )
}
