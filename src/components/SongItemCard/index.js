import {
  SongItem,
  SongImageContainer,
  SongImage,
  NameContainer,
  SongName,
  AlbumName,
  DurationContainer,
  Time,
  DeleteButton,
  DeleteIcon,
} from './styledComponents'

const SongItemCard = props => {
  const {eachSong, deleteSongAlbum} = props
  const {id, imageUrl, name, genre, duration} = eachSong

  const onClickDeleteButton = () => deleteSongAlbum(id)

  return (
    <SongItem>
      <SongImageContainer>
        <SongImage alt="track" src={imageUrl} />
        <NameContainer>
          <SongName>{name}</SongName>
          <AlbumName>{genre}</AlbumName>
        </NameContainer>
      </SongImageContainer>
      <DurationContainer>
        <Time>{duration}</Time>
        <DeleteButton
          data-testid="delete"
          onClick={onClickDeleteButton}
          type="button"
        >
          <DeleteIcon />
        </DeleteButton>
      </DurationContainer>
    </SongItem>
  )
}

export default SongItemCard
