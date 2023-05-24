import { ProfileCardContainer, CardContent } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import { FaGithub } from 'react-icons/fa'

import { useEffect, useState } from 'react'
import { api } from '../../../../server/api'
import { Link } from 'react-router-dom'

interface UsernameInfo {
  name: string
  avatar_url: string
  login: string
  id: number
  followers: number
  company: string
  bio: string
  html_url: string
}

export const ProfileCard = () => {
  const [usernameInfo, setUsernameInfo] = useState<UsernameInfo>(
    {} as UsernameInfo,
  )

  useEffect(() => {
    api.get('/users/rocketseat-education').then((response) => {
      setUsernameInfo(response.data)
    })
  }, [])

  return (
    <ProfileCardContainer>
      <img src={usernameInfo.avatar_url} alt={usernameInfo.name} />
      <CardContent>
        <header>
          <h2>{usernameInfo.name}</h2>
          <Link to={usernameInfo.html_url} target="_blank">
            <span>github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </header>
        <p>{usernameInfo.bio}</p>
        <footer>
          <div>
            <FaGithub />
            <h3>{usernameInfo.login}</h3>
          </div>
          {usernameInfo.company && (
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <h3>{usernameInfo.company}</h3>
            </div>
          )}
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <h3>{usernameInfo.followers} seguidores</h3>
          </div>
        </footer>
      </CardContent>
    </ProfileCardContainer>
  )
}
