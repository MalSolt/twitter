import { useEffect, useReducer, useState } from 'react'
import styled from 'styled-components'
import { API } from './api/api'
import { Loader } from './components/Loader'
import { Post } from './components/Post'
import { Global } from './style/Global'

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        posts: action.payload,
      }
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload,
      }
    case 'TOGGLE_LOADING':
      return {
        ...state,
        isLoading: !state.isLoading,
      }
    default:
      return state
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
`

const Input = styled.input`
  width: 500px;
  height: 35px;
  font-weight: 500;
  font-size: 16px;
  color: #29282e;
  border-radius: 5px;
  padding: 0 5px;
  &:focus,
  &:hover {
    box-shadow: 0 0 8px #2bafc7;
  }
  @media (max-width: 550px) {
    width: 90vw;
  }
`

const Heading = styled.div`
  flex: 1 1 0;
  text-align: center;
  font-size: 35px;
  color: #fff;
  margin-top: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid #a0a0a0;
  width: 400px;
  @media (max-width: 550px) {
    width: 80vw;
  }
`

const Posts = styled.div`
  margin: 0 auto;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
`

export const App = () => {
  const [filterInputValue, setFilterInputValue] = useState('')
  const [state, dispatch] = useReducer(reducer, { posts: null, users: null, isLoading: true })
  const { posts, users, isLoading } = state

  const requestData = async () => {
    const postsData = await API.requestPosts()
    dispatch({ type: 'SET_POSTS', payload: postsData })
    const usersData = await API.requestUsers()
    dispatch({ type: 'SET_USERS', payload: usersData })
    dispatch({ type: 'TOGGLE_LOADING' })
  }

  useEffect(() => {
    requestData()
  }, [])

  const filteringPosts = () =>
    posts
      .filter(e => e.body.toLowerCase().indexOf(filterInputValue.toLowerCase().trim()) !== -1)
      .map(post => {
        let user
        users.filter(e => (e.id === post.userId ? (user = e) : null))
        return <Post key={post.id} user={user} post={post} filterInputValue={filterInputValue} />
      })

  return (
    <Container>
      <Global />
      <Input value={filterInputValue} onChange={e => setFilterInputValue(e.target.value)} placeholder='Найти пост' />
      <Heading>Посты</Heading>
      <Posts>{isLoading ? <Loader /> : filteringPosts()}</Posts>
    </Container>
  )
}
