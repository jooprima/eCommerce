import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ProductRating from "@common/components/ProductRating";
import { currencyFormatter } from "@utils/currency";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(8),
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  productInfo: {
    marginTop: theme.spacing(2),
  },
}));

const ProductDetailCard = ({
  img,
  title,
  price,
  rating,
  sold,
  description,
  quantity,
  condition,
  weight,
  promo,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Card>
        <CardMedia className={classes.media} image={img} title={title} />
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom>
            {title}
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={6}>
              <Typography variant="button" color="secondary">
                {currencyFormatter(price)}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              <ProductRating rating={rating} sold={sold} alignRight />
            </Grid>
          </Grid>

          <Grid container spacing={1} className={classes.productInfo}>
            <Grid
              container
              direction="column"
              justify="center"
              item
              xs={3}
              sm={3}
            >
              <Typography align="center" variant="overline">
                Berat
              </Typography>
              <Typography align="center" variant="button">
                {weight}
              </Typography>
            </Grid>
            <Grid
              container
              direction="column"
              justify="center"
              item
              xs={3}
              sm={3}
            >
              <Typography align="center" variant="overline">
                Kondisi
              </Typography>
              <Typography align="center" variant="button">
                {condition}
              </Typography>
            </Grid>
            <Grid
              container
              direction="column"
              justify="center"
              item
              xs={3}
              sm={3}
            >
              <Typography align="center" variant="overline">
                Stock
              </Typography>
              <Typography align="center" variant="button">
                {quantity}
              </Typography>
            </Grid>
            <Grid
              container
              direction="column"
              justify="center"
              item
              xs={3}
              sm={3}
            >
              <Typography align="center" variant="overline">
                Terjual
              </Typography>
              <Typography align="center" variant="button">
                {sold}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

ProductDetailCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  sold: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  condition: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  promo: PropTypes.array.isRequired,
};

export default ProductDetailCard;
