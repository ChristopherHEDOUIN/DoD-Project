import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({blogData}) {

  let navigate = useNavigate();
    const handleClickSaison = ( saisonSlug ) => {
      navigate("./" + saisonSlug);
    }

  return (
    <ul className='listCards'>
      {
      blogData.map((data) => (
        <Card sx={{ maxWidth:500, m:'2rem', mx:'auto' }}>
          <CardActionArea>
            <CardMedia
              key={data.id}
              component="img"
              max-height="150"
              image={data.image}
              alt={data.title}
              onClick={()=>handleClickSaison(data.slug)}
            />
            <CardContent>
              <Typography 
                gutterBottom variant="h6" 
                component="h6"
              >
                {data.title}
              </Typography>
              
              <Typography 
                variant="body2" 
                color="text.secondary"
                style={{ 
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap'
                }}>
                {data.infos}
              </Typography>
            </CardContent>
          </CardActionArea>
          </Card>
      ))}

    </ul>
  );
}