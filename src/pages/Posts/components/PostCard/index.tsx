import { PostCardContainer } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from 'react-router-dom'

import { FaGithub } from 'react-icons/fa'

import { IPost } from '../../../Dashboard'

import { relativeDateFormatter } from '../../../../utils/formatter'

import {
  faChevronLeft,
  faCalendarDay,
  faComment,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

interface PostCardProps {
  contentPost: IPost
}

export const PostCard = ({ contentPost }: PostCardProps) => {
  const formattedDate = relativeDateFormatter(contentPost.created_at)

  return (
    <PostCardContainer>
      <header>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>Voltar</span>
        </Link>

        <Link to={contentPost.html_url} target="_blank">
          <span>Voltar ao github</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      </header>
      <p>{contentPost.title}</p>
      <footer>
        <div>
          <FaGithub />
          <span>rocketseat-education</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          <time>{formattedDate}</time>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>{contentPost.comments} comentários</span>
        </div>
      </footer>
    </PostCardContainer>
  )
}
