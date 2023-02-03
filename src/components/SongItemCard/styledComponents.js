import styled from 'styled-components'
import {AiOutlineDelete} from 'react-icons/ai'

export const SongItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const SongImageContainer = styled.div`
  display: flex;
`
export const SongImage = styled.img`
  width: 200px;
  margin-right: 10px;
`
export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`
export const SongName = styled.p`
  font-family: Roboto;
  font-weight: 500;
  color: #ffffff;
  font-size: 25px;
`
export const AlbumName = styled.p`
  font-family: Roboto;
  font-weight: 500;
  color: #3b82f6;
  font-size: 20px;
`
export const DurationContainer = styled(SongImageContainer)`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Time = styled.p`
  font-family: Roboto;
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
`
export const DeleteButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  margin-left: 20px;
`
export const DeleteIcon = styled(AiOutlineDelete)`
  color: #ffffff;
  font-size: 20px;
`
