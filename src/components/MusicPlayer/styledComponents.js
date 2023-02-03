import styled from 'styled-components'
import {FiSearch} from 'react-icons/fi'

export const AppContainer = styled.div`
  margin: 0px;
`
export const SingerImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  margin-top: 0px;
  height: 30vh;
  padding: 30px;
  @media screen and (min-width: 768px) {
    height: 40vh;
  }
`

export const SingerName = styled.h1`
  margin-top: 130px;
  font-family: Roboto;
  font-weight: 500;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    margin-top: 200px;
  }
`
export const Designation = styled.p`
  font-family: Roboto;
  font-weight: 500;
  color: #ffffff;
  font-size: 20px;
`
export const SongsContainer = styled.div`
  margin: 0px;
  background-color: #152850;
  padding: 20px;
  height: 70vh;
  @media screen and (min-width: 768px) {
    padding: 20px 50px;
  }
`
export const SongsPlaylistHeading = styled(SingerName)`
  font-size: 25px;
  margin: 0px;
`
export const SearchInputContainer = styled.div`
  border: solid 2px #cbd5e1;
  height: 35px;
  width: 230px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding-right: 10px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
export const Input = styled.input`
  border: none;
  outline: none;
  height: 35px;
  width: 190px;
  background-color: transparent;
  padding-left: 10px;
  color: #ffffff;
  font-family: Roboto;
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`
export const SearchIcon = styled(FiSearch)`
  color: #cbd5e1;
`
export const SongsList = styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 60vh;
`
export const SearchSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const NoSongsFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`
export const NoSongsHeading = styled.p`
  font-family: Roboto;
  font-weight: 500;
  color: #ffffff;
  font-size: 40px;
`
