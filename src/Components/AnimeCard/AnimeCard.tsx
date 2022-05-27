import { Anime } from "../../Types/Anime";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';

  interface Props {
    anime: Anime;
    setId: (id: number) => void;
  }

export const AnimeCard: React.FC<Props> = ({anime, setId}) => {

return (
  <>
     <Card sx={{ maxWidth: 450, height: 400 }}>
      <CardMedia
        component="img"
        height="240"
        image={`${anime.bannerImage}`}
        alt={anime.title.english || anime.title.native}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
         {anime.title.english}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {anime.title.native}
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton 
        aria-label="favorite" 
        size="large"
        style={{marginLeft: 300}}
        onClick={() => setId(anime.id)}
      >
          <FavoriteBorderIcon />
        </IconButton>
      </CardActions>
    </Card>
  </>
)};