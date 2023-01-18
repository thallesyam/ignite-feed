import { Author } from "../Author"
import { Comment } from "../Comment"

import style from "./style.module.css"

export function Post({ post }) {
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

      <form className={style.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={style.commentList}>
        <Comment />
      </div>
    </article>
  )
}
