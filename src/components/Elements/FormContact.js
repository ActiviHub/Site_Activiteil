import React, { useRef } from "react";
import { FloatingLabel } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { RiSendPlaneFill } from "react-icons/ri";

const FormContact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

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
  // ici

  return (
    <Form ref={form} onSubmit={sendEmail} className="px-3 px-ld-0">
      <div className="row">
        <div className="col-12 col-md-4">
          <Form.Control
            type="text"
            className="col-3"
            placeholder="Prénom"
            name="from_firstname"
          />

          <Form.Control
            type="text"
            className="col-md-3"
            placeholder="Nom"
            name="from_surname"
          />
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
