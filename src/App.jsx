import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import style from "./app.module.css"
import "./styles/global.css"

const posts = [
  {
    id: 1,
    author: {
      image: "https://github.com/thallesyam.png",
      name: "Thalles Ian",
      role: "Web Developer",
    },
    publishedAt: new Date("2022-05-03 20:00:00"),
    content: [
      { type: "paragraph", content: "Fala galeraa 👋", attrs: {} },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        attrs: {},
      },
      { type: "link", content: "jane.design/doctorcare", attrs: { href: "#" } },
    ],
  },
  {
    id: 2,
    author: {
      image: "https://github.com/thallesyam.png",
      name: "Angelo",
      role: "backend Developer",
    },
    publishedAt: new Date("2022-05-10 20:00:00"),
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
  },
]

export function App() {
  return (
    <div className="App">
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  )
}
