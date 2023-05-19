import { Grid } from "@mui/material";
import React from "react";
import ContactAddressCard from "./ContactAddressCard";
import ContactEmailCard from "./ContactEmailCard";
import ContactMobileCard from "./ContactMobileCard";

const ContactCards = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ContactMobileCard />
        </Grid>
        <Grid item xs={12}>
          <ContactEmailCard />
        </Grid>
        <Grid item xs={12}>
          <ContactAddressCard />
        </Grid>
      </Grid>
    </>
  );
};

export default ContactCards;
