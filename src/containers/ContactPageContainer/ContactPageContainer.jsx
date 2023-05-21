import React, { useContext } from "react";
import ContactPage from "../../layouts/ContactPage/ContactPage";
import { selectContactPageLabels } from "./ContactPageContainer.selector";
import { Context } from "../../store/Store";

const ContactPageContainer = () => {
  const { state } = useContext(Context);
  const contactpageLabels = selectContactPageLabels(state);
  return (
    <>
      <ContactPage contactpageLabels={contactpageLabels} />
    </>
  );
};

export default ContactPageContainer;
