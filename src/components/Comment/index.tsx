import { useState } from "react"
import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "../Avatar"
import style from "./style.module.css"

type IComment = {
  content: string
  onDeleteComment(commentToDelete: string): void
}

export function Comment({ content, onDeleteComment }: IComment) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleClickOnLike() {
    setLikeCount((prevState) => prevState + 1)
  }

  return (
    <div className={style.comment}>
      <Avatar hasBorder={false} avatarUrl="https://github.com/thallesyam.png" />

      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Thalles Ian</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleClickOnLike}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
