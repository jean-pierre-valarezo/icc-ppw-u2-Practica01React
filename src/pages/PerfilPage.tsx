import { useState } from "react";

export default function PerfilPage() {
  const [name, setName] = useState<string>("Jean Pierre");
  const [lastName, setLastName] = useState<string>("Valarezo");
  const [age, setAge] = useState<number>(21);

  const getFullName = (): string =>
    `${name} ${lastName} con edad ${age} años`;

  const changeData = (): void => {
    setName("Sebastian");
    setLastName("Gomez");
    setAge(25);
  };

  const changeAge = (): void => {
    setAge(21);
  };

  const resetData = (): void => {
    setName("Jean Pierre");
    setLastName("Valarezo");
    setAge(21);
  };

  return (
    <div style={{ fontFamily: "Arial", margin: "20px" }}>
      <h1>{name}</h1>
      <dl>
        <dt>Nombre:</dt>
        <dd>{name}</dd>
        <dt>Apellido:</dt>
        <dd>{lastName}</dd>
        <dt>Edad:</dt>
        <dd>{age}</dd>
        <dt>Nombre completo:</dt>
        <dd>{getFullName()}</dd>
        <dt>Nombre y Apellido (Mayúsculas):</dt>
        <dd>{`${name.toUpperCase()} ${lastName.toUpperCase()}`}</dd>
      </dl>

      <button onClick={changeData}>Cambiar datos</button>
      <button onClick={changeAge}>Cambiar edad</button>
      <button onClick={resetData}>Reset</button>
    </div>
  );
}
