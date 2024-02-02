import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="contact py-4">
      <div className="container">
        <div className="d-flex flex-column align-items-center">
          <div className="title">
            <h2 className="fs-1 fw-bold sec__clr">CONTACT SECTION</h2>
          </div>
          <div className="seprator d-flex align-items-center gap-3 pb-4 sec__clr">
            <div className="line sec__bg-clr"></div>
            <FontAwesomeIcon icon={faStar} />
            <div className="line sec__bg-clr"></div>
          </div>
        </div>
        <form className="form">
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label className={`input-label ${name ? "visible" : "hidden"}`}>Enter Name :</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className={`input-label ${email ? "visible" : "hidden"}`}>Enter Email :</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEAge">
            <Form.Label className={`input-label ${age ? "visible" : "hidden"}`}>Enter Age :</Form.Label>
            <Form.Control type="number" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label className={`input-label ${password ? "visible" : "hidden"}`}>Enter Password :</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <button className="submit-btn btn accent__bg-clr text-white" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
