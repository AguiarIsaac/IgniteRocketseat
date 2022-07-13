import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'
import styles from './Sidebar.module.css'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1656173460244-faad38c026e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"/>

            <div className={styles.profile}>
                <Avatar src="https://github.com/aguiarisaac.png"/>
                <strong>Isaac Aguiar</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}