import React from 'react'
import styled from 'styled-components'
import userPhoto from '../img/user-photo.png'
import Highlighter from 'react-highlight-words'
import { TPost, TUser } from '../types/commonTypes'

const Container = styled.div`
  max-width: 400px;
  background: #fff;
  box-shadow: 0 0 3px rgb(177, 177, 177);
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px 10px 5px;
`
const Name = styled.div`
  margin-bottom: 3px;
  font-weight: 500;
  font-size: 14px;
`

const Nickname = styled.div`
  font-size: 14px;
  color: #2db4b4;
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #dbdbdb;
`

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 5px;
`

const Title = styled.div`
  line-height: 1.2;
  margin-bottom: 10px;
  font-size: 20px;
  color: #ffffff;
  background: #5a48ff;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  font-weight: 500;
  border-bottom: 1px solid #b8b8b8;
  padding-bottom: 5px;
`

const Body = styled.div`
  line-height: 1.2;
  margin-bottom: 10px;
  font-weight: 500;
`

type TProps = {
  user: TUser
  post: TPost
  filterInputValue: string
}

export const Post = ({ user, post, filterInputValue }: TProps) => {
  return (
    <Container>
      <Title>{post.title}</Title>
      <UserInfo>
        <Avatar src={userPhoto} alt='' />
        <div>
          <Name>{user.name}</Name>
          <Nickname>@{user.username}</Nickname>
        </div>
      </UserInfo>
      <Body>
        <Highlighter
          highlightClassName='YourHighlightClass'
          searchWords={[filterInputValue]}
          autoEscape={true}
          textToHighlight={post.body}
        />
      </Body>
    </Container>
  )
}
