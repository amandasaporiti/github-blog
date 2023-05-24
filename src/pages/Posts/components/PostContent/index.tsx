/* eslint-disable react/no-children-prop */
import { PostContentContainer } from './styles'

import ReactMarkdown from 'react-markdown'

interface PostContentProps {
  content: string
}

export const PostContent = ({ content }: PostContentProps) => {
  const markdown = content

  return (
    <PostContentContainer>
      <ReactMarkdown children={markdown}></ReactMarkdown>
    </PostContentContainer>
  )
}
