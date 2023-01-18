import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"
import { Author } from "../Author"
import { Comment } from "../Comment"

import style from "./style.module.css"

type IAuthor = {
  image: string
  name: string
  role: string
}

type IPost = {
  post: {
    id: number
    author: IAuthor
    publishedAt: Date
    content: { type: string; content: string; attrs?: any }[]
  }
}

export function Post({ post }: IPost) {
  const [newCommentText, setNewCommentText] = useState("")
  const [comments, setComments] = useState(["Post muito útil heim"])

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments((prevState) => [...prevState, newCommentText])
    setNewCommentText("")
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("")
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório")
  }

  function onDeleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment !== commentToDelete
    )
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = !newCommentText

  return (
    <article className={style.post}>
      <Author author={post.author} publishedAt={post.publishedAt} />

      <div className={style.content}>
        {post.content.map((line) => {
          if (line.type === "paragraph") {
            return (
              <p key={line.content} {...line.attrs}>
                {line.content}
              </p>
            )
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a {...line.attrs}>{line.content}</a>
              </p>
            )
          }
        })}
      </div>

      <form className={style.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={style.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={onDeleteComment}
          />
        ))}
      </div>
    </article>
  )
}
