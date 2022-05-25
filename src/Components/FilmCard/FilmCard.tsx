import { Anime } from "../../Types/Anime";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';

export const FilmCard: React.FC<Anime> = ({
  bannerImage,
  id,
  title: {
    english,
    native,
  }
}) => (
  <>
     <Card sx={{ maxWidth: 450, height: 430 }}>
      <CardMedia
        component="img"
        height="240"
        image={`${bannerImage}`}
        alt={english}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
         {english}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {native}
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton style={{textAlign: "right"}} aria-label="add to favorites">
          <FavoriteBorderIcon />
        </IconButton>
      </CardActions>
    </Card>
  </>
);