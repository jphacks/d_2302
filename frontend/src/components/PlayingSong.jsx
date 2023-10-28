import { Typography, Box } from '@mui/material';
import { extract } from '../utils/extract';

export const PlayingSong = ({ imgPath }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      { /* 現在流れている曲の情報　*/}
      <Typography component="subtitle1">
        now
      </Typography>
      <img src={"./images/" + imgPath} className="Now-play-song" alt="jacket" width="340" />
      <Typography component="body1">
        {extract.songTitle(imgPath) + " / " + extract.artist(imgPath)}
      </Typography>
    </Box>
  )
}