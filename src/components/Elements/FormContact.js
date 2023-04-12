import React, { useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../Context/ThemeContext";
import { FloatingLabel } from "react-bootstrap";
import { useForm } from "react-hook-form";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { RiSendPlaneFill } from "react-icons/ri";

const FormContact = () => {
  const {
    register,
    // watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const sendEmail = () => {
    // e.preventDefault();
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
          <p>ok</p>;
        },
        (error) => {
          console.log(error.text);
          <p>NON</p>;
        }
      );
    form.current.reset();
  };

  // const submitButton = watch("submitButton");
  const { theme } = useContext(ThemeContext);
  const form = useRef();

  // ici

  return (
    <Form
      ref={form}
      onSubmit={handleSubmit(sendEmail)}
      className="px-3 px-ld-0"
    >
      <div
        className={`h2 mb-3 ${
          theme ? `bg-primary text-light` : `bg-light text-dark`
        }`}
      >
        Vous souhaitez nous écrire un e-mail ?
      </div>

      <div className="row">
        <div className="col-12 col-md-4">
          <error className="lead text-danger">
            {errors.from_firstname?.type === "minLength" &&
              "Ecrire plus de 2 caractères"}
            {errors.from_firstname?.type === "maxLength" &&
              "Ecrire moins de 20 caractères"}
            {errors.from_firstname?.type === "pattern: /^[A-Za-z]+$/i"}
            {errors.from_firstname?.type === "required" &&
              "Entrez votre prénom"}
          </error>

          <Form.Control
            type="text"
            className="col-3"
            placeholder="Prénom"
            name="from_firstname"
            {...register("from_firstname", {
              required: true,
              minLength: 3,
              maxLength: 19,
            })}
            // onChange={handleSubmit()}
          />

          <error className="lead text-danger">
            {errors.from_surname?.type === "required" && "Entrez votre nom"}
            {errors.from_surname?.type === "minLength" &&
              "Ecrire plus de 2 caractères"}
            {errors.from_surname?.type === "maxLength" &&
              "Ecrire moins de 20 caractères"}
          </error>
          <Form.Control
            type="text"
            className="col-md-3"
            placeholder="Nom"
            name="from_surname"
            {...register("from_surname", {
              required: true,
              minLength: 3,
              maxLength: 19,
            })}
          />

          <Form.Group controlId="formBasicEmail">
            <error className="lead text-danger">
              {errors.from_email?.type === "required" && "Entrez votre email"}
              {errors.from_email?.type === "pattern" &&
                "L'email n'a pas un format correct"}
              {errors.from_email?.type === "minLength" &&
                "Ecrire plus de 13 caractères"}
              {errors.from_email?.type === "maxLength" &&
                "Ecrire moins de 30 caractères"}
            </error>
            <Form.Control
              type="email"
              placeholder="E-mail"
              name="from_email"
              {...register("from_email", {
                required: true,
                pattern: /^[a-zA-z0-9_.+-]+@[a-zA-z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                minLength: 13,
                maxLength: 29,
              })}
            />
          </Form.Group>
        </div>
        <div className="col-12 col-md-8">
          <error className="lead text-danger">
            {errors.object?.type === "required" &&
              "Merci d'indiquer l'objet de votre email"}
            {errors.object?.type === "minLength" &&
              "Ecrire plus de 10 caractères"}
            {errors.object?.type === "maxLength" &&
              "Ecrire moins de 50 caractères"}
          </error>
          <Form.Control
            type="text"
            placeholder="Objet"
            name="object"
            {...register("object", {
              required: true,
              minLength: 10,
              maxLength: 49,
            })}
          />{" "}
          <FloatingLabel controlId="floatingTextarea">
            <error className="lead text-danger">
              {errors.message?.type === "required" &&
                "Merci de nous écrire un message"}
              {errors.message?.type === "minLength" &&
                "Ecrire plus de 100 caractères"}
              {errors.message?.type === "maxLength" &&
                "Ecrire moins de 700 caractères"}
            </error>
            <Form.Control
              as="textarea"
              type="text"
              name="message"
              {...register("message", {
                required: true,
                minLength: 100,
                maxLength: 699,
              })}
              style={{ height: "75px" }}
            />
          </FloatingLabel>
          {/* 
          {submitButton === "submitButton" && ( */}
          <Button className="col-12" variant="success" type="submit">
            <RiSendPlaneFill />
            &nbsp; Envoyer
          </Button>
          {/* )} */}
        </div>
      </div>
    </Form>
  );
};

export default FormContact;
