import { Avatar, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import style from "./style.module.css";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const ContactMobileCard = (props) => {
  const { phoneCard } = props;
  return (
    <>
      <Paper elevation={0} className={style.contact_cards}>
        <Grid container spacing={2}>
          <Grid item>
            <PhoneIphoneIcon fontSize="large" />
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {phoneCard.phoneCardTitle}
            </Typography>
            <Typography variant="subtitle1" className={style.contact_card_text}>
              {phoneCard.phoneNo1}
            </Typography>
            <Typography variant="subtitle1" className={style.contact_card_text}>
              {phoneCard.phoneNo2}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ContactMobileCard;
