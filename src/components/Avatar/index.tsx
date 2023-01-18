import style from "./style.module.css"

type IAvatar = {
  avatarUrl: string
  hasBorder?: boolean
}

export function Avatar({ avatarUrl, hasBorder = true }: IAvatar) {
  return (
    <img
      className={hasBorder ? style.avatarWithBorder : style.avatar}
      src={avatarUrl}
    />
  )
}
