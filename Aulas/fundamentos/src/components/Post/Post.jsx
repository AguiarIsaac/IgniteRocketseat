import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { useState } from 'react'

export function Post({author, publishedAt, content}) {

    const dateFormated = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBr,
    })

    const publishedRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true,
    })

    const [ comments, setComments ] = useState([
        'Topzeira hein!!! 👏👏'
    ])

    const [newCommentText, setCommentText] = useState('')

    function newCommentInvalid() {
        event.target.setCustomValidity('este campo é obrigatório!')
    }

    function handleNewComment() {
        event.target.setCustomValidity('')
        setCommentText(event.target.value)
    }

    function publisheComment() {
        event.preventDefault()

        
        setComments([...comments, newCommentText])
        setCommentText('')
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment != commentToDelete
        })

        setComments(commentsWithoutDeleteOne)
    }

    const commentEmpy = newCommentText == 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={dateFormated} dateTime={publishedAt.toISOString()}>{publishedRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map((item) => {
                    if(item.type == 'paragraph'){
                        return <p key={item.content}>{item.content}</p>
                    } else if (item.type == 'link') {
                        return <p key={item.content}><a href="#">{item.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={publisheComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                value={newCommentText}
                onChange={handleNewComment}
                onInvalid={newCommentInvalid}
                placeholder="Deixe seu comentário"
                name='content'
                required/>
                
                <footer>
                    <button type="submit" disabled={commentEmpy}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
                })}
            </div>
        </article>
    )
}