import { Grid } from "@mui/material";
import React from "react";
import ContactAddressCard from "./ContactAddressCard";
import ContactEmailCard from "./ContactEmailCard";
import ContactMobileCard from "./ContactMobileCard";

const ContactCards = (props) => {
  if (!props.phoneCard) return;
  const { phoneCard, emailCard, addressCard } = props;
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ContactMobileCard phoneCard={phoneCard} />
        </Grid>
        <Grid item xs={12}>
          <ContactEmailCard emailCard={emailCard} />
        </Grid>
        <Grid item xs={12}>
          <ContactAddressCard addressCard={addressCard} />
        </Grid>
      </Grid>
    </>
  );
};

export default ContactCards;
