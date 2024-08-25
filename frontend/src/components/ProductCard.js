import React from 'react';
import Card from '@mui/material/Card';
import { CardContent, CardHeader, CardMedia, Rating, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types'; // Import PropTypes

const ProductCard = ({ product }) => {
  return (
    <Card
      sx={{
        width: 345,
        height: 550,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        marginTop:"10px",

      }}
    >
      <CardHeader title={product.title} />
      <CardMedia
        component="img"
        height="194"
        image={product.images}
        alt="Product image"
      />
      <CardContent>
        <Stack direction="column" spacing={1}>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={product.rating}
              precision={0.5}
              readOnly
            />
            <Typography variant="body1" color="text.primary">
              {product.rating}
            </Typography>
          </Stack>
          <Stack direction="column">
            <Typography variant="body1" color="text.primary">
              {product.price} $
            </Typography>
            <Typography variant="body1" color="text.primary">
              Price discount: {product.discountPercentage}%
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

// Define prop types
ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    discountPercentage: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
