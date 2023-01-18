import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import { Avatar } from "../Avatar"

import style from "./style.module.css"

type IAuthor = {
  image: string
  name: string
  role: string
}

type AuthorProps = {
  author: IAuthor
  publishedAt: Date
}

export function Author({ author, publishedAt }: AuthorProps) {
  const publishedDateFormated = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  )
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <header className={style.headerPost}>
      <div className={style.author}>
        <Avatar avatarUrl={author.image} />

        <div className={style.authorInfo}>
          <strong>{author.name}</strong>
          <span>{author.role}</span>
        </div>
      </div>

      <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
        {publishedDateRelativeToNow}
      </time>
    </header>
  )
}
