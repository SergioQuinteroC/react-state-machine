import React, { useState } from "react";
import "./Passengers.css";

export const Passengers = ({ state, send }) => {
  const [value, changeValue] = useState("");

  const onChangeInput = (e) => {
    changeValue(e.target.value);
  };

  const goToTicket = () => {
    send("DONE");
  };

  const { passengers } = state.context;

  const submit = (e) => {
    e.preventDefault();
    send("ADD", { newPassengers: value });
    changeValue("");
  };

  return (
    <form onSubmit={submit} className="Passengers">
      <p className="Passengers-title title">
        Agrega a las personas que van a volar ✈️
      </p>
      {passengers.map((passenger, idx) => (
        <p className="text" key={`person-${idx}`}>
          {passenger}
        </p>
      ))}
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Escribe el nombre completo"
        required
        value={value}
        onChange={onChangeInput}
      />
      <div className="Passengers-buttons">
        <button className="Passengers-add button-secondary" type="submit">
          Agregar Pasajero
        </button>
        <button
          className="Passenger-pay button"
          type="button"
          onClick={goToTicket}
        >
          Ver mi ticket
        </button>
      </div>
    </form>
  );
};
