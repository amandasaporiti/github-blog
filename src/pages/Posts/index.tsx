import { PostCard } from './components/PostCard'

import { useCallback, useEffect, useState } from 'react'
import { api } from '../../server/api'
import { useParams } from 'react-router-dom'
import { IPost } from '../Dashboard'

import { PostsContent } from './styles'
import { PostContent } from './components/PostContent'

export const Posts = () => {
  const { numberPost } = useParams()

  const [issues, setIssues] = useState<IPost>({} as IPost)

  const fetchIssues = useCallback(async () => {
    const response = await api.get(
      `/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${numberPost}`,
    )
    setIssues(response.data)
  }, [numberPost])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <div>
      <PostsContent>
        <PostCard contentPost={issues} />
        <PostContent content={issues.body} />
      </PostsContent>
    </div>
  )
}
