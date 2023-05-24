import { NavLink } from 'react-router-dom'
import { IPost } from '../..'
import { PostContent } from './styles'

import { relativeDateFormatter } from '../../../../utils/formatter'

export interface PostProps {
  content: IPost
}

export const Post = ({ content }: PostProps) => {
  const formattedDate = relativeDateFormatter(content.created_at)

  return (
    <PostContent>
      <NavLink to={`posts/${content.number}`}>
        <header>
          <h2>{content.title}</h2>
          <time>{formattedDate}</time>
        </header>
        <p>{content.body}</p>
      </NavLink>
    </PostContent>
  )
}
