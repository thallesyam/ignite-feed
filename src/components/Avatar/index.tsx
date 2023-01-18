import { ImgHTMLAttributes } from "react"
import style from "./style.module.css"

type IAvatar = ImgHTMLAttributes<HTMLImageElement> & {
  avatarUrl: string
  hasBorder?: boolean
}

export function Avatar({ avatarUrl, hasBorder = true, ...rest }: IAvatar) {
  return (
    <img
      {...rest}
      className={hasBorder ? style.avatarWithBorder : style.avatar}
      src={avatarUrl}
    />
  )
}
