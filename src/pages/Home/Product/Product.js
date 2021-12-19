import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        p: 1,
        borderRadius: 1,
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function Gap() {
  return (
    <div style={{ width: '100%', marginTop: '2%'}}>
      <Box
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        <Item>
        <Card>
                <CardMedia
                    component="img"
                    height="150"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png'
                    alt="green iguana"
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        Ayon Roy
                    </Typography>
                    <Typography sx={{ textAlign: 'left' }} variant="subtitle1" color="text.secondary">
                        <b>Description : </b> dsfsdafsdfsdfsdf
                    </Typography>
                    <Typography sx={{ textAlign: 'left' }} variant="subtitle1" color="text.secondary">
                        <b>Rating :</b> 5.5
                    </Typography>
                </CardContent>
                <CardActions sx={{ m: 'auto' }}>
                    <NavLink style={{ margin: 'auto', textDecoration: 'none' }} to={`Details`}> <Button variant='contained' size="small">Purchase Package</Button></NavLink>

                </CardActions>
            </Card>
        </Item>
        <Item>
        <Card>
                <CardMedia
                    component="img"
                    height="150"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png'
                    alt="green iguana"
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        Ayon Roy
                    </Typography>
                    <Typography sx={{ textAlign: 'left' }} variant="subtitle1" color="text.secondary">
                        <b>Description : </b> dsfsdafsdfsdfsdf
                    </Typography>
                    <Typography sx={{ textAlign: 'left' }} variant="subtitle1" color="text.secondary">
                        <b>Rating :</b> 5.5
                    </Typography>
                </CardContent>
                <CardActions sx={{ m: 'auto' }}>
                    <NavLink style={{ margin: 'auto', textDecoration: 'none' }} to={`Details`}> <Button variant='contained' size="small">Purchase Package</Button></NavLink>

                </CardActions>
            </Card>
        </Item>
        <Item>
        <Card>
                <CardMedia
                    component="img"
                    height="150"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png'
                    alt="green iguana"
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        Ayon Roy
                    </Typography>
                    <Typography sx={{ textAlign: 'left' }} variant="subtitle1" color="text.secondary">
                        <b>Description : </b> dsfsdafsdfsdfsdf
                    </Typography>
                    <Typography sx={{ textAlign: 'left' }} variant="subtitle1" color="text.secondary">
                        <b>Rating :</b> 5.5
                    </Typography>
                </CardContent>
                <CardActions sx={{ m: 'auto' }}>
                    <NavLink style={{ margin: 'auto', textDecoration: 'none' }} to={`Details`}> <Button variant='contained' size="small">Purchase Package</Button></NavLink>

                </CardActions>
            </Card>
        </Item>
        <Item>
        <Card>
                <CardMedia
                    component="img"
                    height="150"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png'
                    alt="green iguana"
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        Ayon Roy
                    </Typography>
                    <Typography sx={{ textAlign: 'left' }} variant="subtitle1" color="text.secondary">
                        <b>Description : </b> dsfsdafsdfsdfsdf
                    </Typography>
                    <Typography sx={{ textAlign: 'left' }} variant="subtitle1" color="text.secondary">
                        <b>Rating :</b> 5.5
                    </Typography>
                </CardContent>
                <CardActions sx={{ m: 'auto' }}>
                    <NavLink style={{ margin: 'auto', textDecoration: 'none' }} to={`Details`}> <Button variant='contained' size="small">Purchase Package</Button></NavLink>

                </CardActions>
            </Card>
        </Item>
      </Box>
    </div>
  );
}