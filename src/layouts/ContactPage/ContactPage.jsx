import React from "react";
import SubtitleText from "../../components/SubtitleText/SubtitleText";
import HorBackContainer from "../../shared/containers/HorBackContainer/HorBackContainer";
import style from "./style.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import ContactForm from "./ContactForm/ContactForm";
import ContactCards from "./ContactCards/ContactCards";

const ContactPage = (props) => {
  const { contactpageLabels } = props;
  const { pageTitle, contactForm, phoneCard, emailCard, addressCard } =
    contactpageLabels;
  return (
    <>
      <div className={style.contactpage_container}>
        <HorBackContainer />
        <div className={style.contactpage_section}>
          <Container maxWidth="lg">
            <SubtitleText text={pageTitle} />
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={10}>
                <Grid item xs={12} md={6}>
                  <ContactForm contactForm={contactForm} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <ContactCards
                    phoneCard={phoneCard}
                    emailCard={emailCard}
                    addressCard={addressCard}
                  />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
