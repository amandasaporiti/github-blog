import { useState, useEffect, useCallback } from 'react'
import { ProfileCard } from './components/ProfileCard'
import { api } from '../../server/api'
import { PostsContainer, Posts } from './styles'
import { Post } from './components/Post'
import { SearchForm } from './components/SearchForm'

export interface IPost {
  title: string
  body: string
  number: number
  created_at: string
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export const Dashboard = () => {
  const [posts, setPosts] = useState<IPost[]>([])

  const fetchPosts = useCallback(async (query: string = '') => {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:rocketseat-education/reactjs-github-blog-challenge`,
    )

    setPosts(response.data.items)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostsContainer>
      <ProfileCard />

      <header>
        <h2>Publicações</h2>
        <span>{posts.length} publicações</span>
      </header>

      <SearchForm fetchPosts={fetchPosts} />

      <Posts>
        {posts.map((post) => (
          <Post content={post} key={post.number} />
        ))}
      </Posts>
    </PostsContainer>
  )
}
