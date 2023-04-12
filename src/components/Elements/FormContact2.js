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
    from_firstname: "",
    from_email: "",
    message: "",
  };
  const [formvalue, setFormvalue] = useState({
    initialValues,
  });
  const [formerror, setFormerror] = useState({});
  const [issubmit, setSubmit] = useState(false);

  const handlevalidation = (e) => {
    const { name, value } = e.target;
    setFormvalue({ ...formvalue, [name]: value });
  };

  const { theme } = useContext(ThemeContext);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setFormerror(validationform(formvalue));
    setSubmit(true);
    emailjs
      .sendForm(
        "service_4zr00q8",
        "template_u7omx51",
        form.current,
        "dQwPA98Z1xVRmUVuX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };
  useEffect(() => {
    if (Object.keys(formerror).length === 0 && issubmit) {
    }
  }, [formerror, formvalue, issubmit]);

  const validationform = (value) => {
    const errors = {};
    const emailPattern =
      "^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*$";
    if (!value.from_firstname) {
      errors.from_firstname = "Merci d'écrire votre prénom";
    } else if (value.from_firstname < 3) {
      errors.firstname = "Votre prénom doit contenir au moins 3 caractères";
    } else if (value.from_firstname > 15) {
      errors.from_firstname =
        "Votre prénom doit contenir moins de 15 caractères";
    }

    if (!value.from_surname) {
      errors.from_surname = "Merci d'écrire votre nom";
    } else if (value.from_surname < 3) {
      errors.from_surname = "Votre nom doit contenir au moins 3 caractères";
    } else if (value.from_surname > 15) {
      errors.from_surname = "Votre nom doit contenir moins de 15 caractères";
    }

    if (!value.from_email) {
      errors.from_email = "Merci d'écrire votre e-mail";
    } else if (!emailPattern.test(value.email)) {
      errors.email = "Entrez un e-mail valide";
    } else if (value.from_email < 3) {
      errors.from_email = "Votre email doit contenir au moins 3 caractères";
    } else if (value.from_email > 15) {
      errors.from_email = "Votre email doit contenir moins de 15 caractères";
    }

    if (!value.message) {
      errors.message = "Merci d'écrire votre message";
    } else if (value.message < 50) {
      errors.message = "Votre message doit contenir au moins 50 caractères";
    } else if (value.message > 600) {
      errors.message = "Votre message doit contenir moins de 600 caractères";
    }

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
            value={formvalue.from_firstname}
            onChange={handlevalidation}
          />
          <span className="text-danger">{formerror.from_firstname}</span>

          <Form.Control
            type="text"
            className="col-md-3"
            placeholder="Nom"
            value={formvalue.from_surname}
            name="from_surname"
          />
          <span className="text-danger">{formerror.from_surname}</span>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="E-mail"
              name="from_email"
              value={formvalue.from_email}
              onChange={handlevalidation}
            />
            <span className="text-danger">{formerror.from_email}</span>
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
              value={formvalue.message}
              style={{ height: "75px" }}
            />
          </FloatingLabel>
          <span className="text-danger">{formerror.message}</span>
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
