// Depois comentar todo o código

import { Header } from "./components/Header/Header"
import { Post } from "./components/Post/Post"
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar/Sidebar"

const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/aguiarisaac.png',
      name: 'Isaac Aguiar',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-07-04 17:22:05'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/sarasousapb.png',
      name: 'Sara Sousa',
      role: 'Mechanic Engineer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-06-29 14:50:43')
  }
]

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            post.map((post) => {
              return (
                < Post
                  key={post.id}
                  author= {post.author}
                  content= {post.content}
                  publishedAt= {post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}
