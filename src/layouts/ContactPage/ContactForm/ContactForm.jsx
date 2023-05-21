import React from "react";
import style from "./style.module.css";
import { FormControl, TextField, Typography, Box, Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { firstColor } from "../../../style.module.css";

const ContactForm = (props) => {
  if (!props.contactForm) {
    return;
  }
  const { contactForm } = props;
  const {
    formTitle,
    nameField,
    emailField,
    subjectField,
    multiLineThoughtsField,
  } = contactForm;
  const fields = [nameField, emailField, subjectField];
  const theme = createTheme({
    palette: {
      primary: {
        main: firstColor,
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            {formTitle}
          </Typography>
          <FormControl sx={{ width: "100%" }}>
            {fields.map((field) => {
              return (
                <TextField
                  key={field}
                  sx={{ width: "100%", mb: 4 }}
                  id="outlined-basic"
                  label={field}
                  variant="outlined"
                  required
                  InputLabelProps={{ shrink: true }}
                />
              );
            })}
            <TextField
              sx={{ width: "100%", mb: 4 }}
              id="outlined-basic"
              label={multiLineThoughtsField}
              variant="outlined"
              required
              InputLabelProps={{ shrink: true }}
              multiline
              rows={7}
            />
          </FormControl>
          <Button variant="contained" size="large" className={style.submit_btn}>
            SEND MAIL
          </Button>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default ContactForm;
