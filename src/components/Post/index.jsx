import { Author } from "../Author"

import style from "./style.module.css"

const author = {
  image: "https://github.com/thallesyam.png",
  name: "Thalles Ian",
  role: "Web Developer",
}

const time = {
  dateTime: "2022-05-11 08:13:10",
  title: "11 de Maio às 08:13h",
  hour: "1h",
}

export function Post() {
  return (
    <article className={style.post}>
      <Author author={author} time={time} />

      <div className={style.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a>jane.design/doctorcare</a>
        </p>

        <p className={style.tags}>
          <a>#novoprojeto</a>
          <a>#nlw</a>
          <a>#rocketseat </a>
        </p>
      </div>

      <form className={style.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}
