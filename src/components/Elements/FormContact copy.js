import React, { useRef, useState, useEffect, useContext } from "react";

import { ThemeContext } from "../../Context/ThemeContext";
import { FloatingLabel } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { RiSendPlaneFill } from "react-icons/ri";

const FormContact = () => {
  const initialValues = {
    from_surname: "",
    // from_firstname: "",
    // from_email: "",
    // message: "",
  };

  const [formValue, setFormValue] = useState({
    initialValues,
  });
  const [formError, setFormError] = useState({});
  const [isSubmit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
    }
  }, [formError, formValue, isSubmit]);

  const { theme } = useContext(ThemeContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setFormError(validateForm(formValue));
    setSubmit(true);

    // emailjs
    //   .sendForm(
    //     "service_4zr00q8",
    //     "template_u7omx51",
    //     form.current,
    //     "dQwPA98Z1xVRmUVuX"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    form.current.reset();
  };

  const validateForm = (value) => {
    const errors = {};

    if (!value.from_firstname) {
      errors.from_firstname = "Merci d'écrire votre prénom";
    }

    // } else if  (value.from_firstname < 3) {
    //     errors.firstname = "Votre prénom doit contenir au moins 3 caractères";
    //   } else if (value.from_firstname > 15) {
    //     errors.from_firstname =
    //       "Votre prénom doit contenir moins de 15 caractères";
    //   }

    return errors;
  };
  // ici

  return (
    <Form ref={form} onSubmit={sendEmail} className="px-3 px-ld-0">
      <div
        className={`h2 mb-3 ${
          theme ? `bg-primary text-light` : `bg-light text-dark`
        }`}
      >
        Vous souhaitez nous écrire un e-mail ?
      </div>

      <div className="row">
        <div className="col-12 col-md-4">
          <Form.Control
            type="text"
            className="col-3"
            placeholder="Prénom"
            name="from_firstname"
            value={formValue.from_firstname}
            onChange={handleSubmit}
          />
          <span className="text-danger">{formError.from_firstname}</span>

          <Form.Control type="text" className="col-md-3" placeholder="Nom" />
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="E-mail" name="from_email" />
          </Form.Group>
        </div>
        <div className="col-12 col-md-8">
          <Form.Control type="text" placeholder="Objet" name="object" />
          <FloatingLabel controlId="floatingTextarea" label="Votre message ici">
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Objet"
              name="message"
              style={{ height: "75px" }}
            />
          </FloatingLabel>
          <Button className="col-12" variant="success" type="submit">
            <RiSendPlaneFill />
            &nbsp; Envoyer
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default FormContact;
