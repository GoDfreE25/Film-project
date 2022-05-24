import { Films } from "../../Types/Film";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';

export const FilmCard: React.FC<Films> = ({
  title,
  origName,
  imgUrl,
}) => (
  <>
     <Card sx={{ maxWidth: 355 }}>
      <CardMedia
        component="img"
        height="240"
        image={`${imgUrl}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {origName}
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