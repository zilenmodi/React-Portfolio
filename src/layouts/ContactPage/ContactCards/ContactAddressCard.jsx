import { Avatar, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import style from "./style.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactAddressCard = (props) => {
  const { addressCard } = props;
  return (
    <>
      <Paper elevation={0} className={style.contact_cards}>
        <Grid container spacing={2}>
          <Grid item>
            <LocationOnIcon fontSize="large" />
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {addressCard.addressCardTitle}
            </Typography>
            <Typography variant="subtitle1" className={style.contact_card_text}>
              {addressCard.address}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ContactAddressCard;
