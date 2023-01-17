import { Avatar } from "../Avatar"

import style from "./style.module.css"

export function Author({ author, time }) {
  return (
    <header className={style.headerPost}>
      <div className={style.author}>
        <Avatar avatarUrl={author.image} />

        <div className={style.authorInfo}>
          <strong>{author.name}</strong>
          <span>{author.role}</span>
        </div>
      </div>

      <time title={time.title} dateTime={time.dateTime}>
        Publicado há {time.hour}
      </time>
    </header>
  )
}
