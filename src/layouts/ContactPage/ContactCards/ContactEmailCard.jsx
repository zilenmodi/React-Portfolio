import { Avatar, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import style from "./style.module.css";
import EmailIcon from "@mui/icons-material/Email";

const ContactEmailCard = (props) => {
  const { emailCard } = props;
  return (
    <>
      <Paper elevation={0} className={style.contact_cards}>
        <Grid container spacing={2}>
          <Grid item>
            <EmailIcon fontSize="large" />
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {emailCard.emailCardTitle}
            </Typography>
            <Typography variant="subtitle1" className={style.contact_card_text}>
              {emailCard.email1}
            </Typography>
            <Typography variant="subtitle1" className={style.contact_card_text}>
              {emailCard.email2}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ContactEmailCard;
