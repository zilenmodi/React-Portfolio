import { Avatar, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import style from "./style.module.css";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const ContactMobileCard = () => {
  return (
    <>
      <Paper elevation={0} className={style.contact_cards}>
        <Grid container spacing={2}>
          <Grid item>
            <PhoneIphoneIcon fontSize="large" />
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Phone
            </Typography>
            <Typography variant="subtitle1" className={style.contact_card_text}>
              +91 9724666420
            </Typography>
            <Typography variant="subtitle1" className={style.contact_card_text}>
              +91 8320472114
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ContactMobileCard;
