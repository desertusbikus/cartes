import logo from "./assets/logo.png";
import user from "./assets/user.png";
import "./App.css";
import Dropzone, { FilePreview } from "./Dropzone";
import { useState } from "react";

import { StyleName, SubstyleName, styles } from "./card_utils/styles";
import { Card } from "./Card";
import { Form } from "./Form";

function App() {
  const [flag, setFlag] = useState("FR");
  const [name, setName] = useState("Gui Dondevélo");
  const [age, setAge] = useState(42);
  const [endurance, setEndurance] = useState(99);
  const [offroad, setOffroad] = useState(1);
  const [climb, setClimb] = useState(20);
  const [days, setDays] = useState(3);
  const [stars, setStars] = useState(3);
  const [style, setStyle] = useState("Desertus");
  const [substyle, setSubstyle] = useState("Racer");
  const [fontPercent, setFontPercent] = useState(100);
  const [nickname, setNickname] = useState("Guitoune");
  const [role, setRole] = useState("Glandeur");

  const [image, setImage] = useState<string>(user);

  return (
    <>
      <header className="flex-initial col-span-3 bg-desert p-4 mb-8 shadow-black shadow-lg ">
        <a href="https://desertusbikus.com" target="_blank">
          <img
            src={logo}
            className="inline-block h-12 w-12 mr-6"
            alt="Desertus Bikus"
          />
          <h1 className="inline align-middle text-3xl font-bold">
            Desertus Bikus
          </h1>
        </a>
      </header>

      <main className="flex flex-row">
        {/* Dropzone menu */}
        <div className="col-span-1 w-64 m-4">
          <Dropzone
            onChange={(f: FilePreview) => {
              setImage(f.preview);
            }}
          />
        </div>

        {/* Card form */}
        <div className=" col-span-1 w-80 m-4 mx-8 border-dashed border-2 border-desert p-4">
          <Form
            age={age}
            setAge={setAge}
            name={name}
            setName={setName}
            flag={flag}
            setFlag={setFlag}
            endurance={endurance}
            setEndurance={setEndurance}
            offroad={offroad}
            setOffroad={setOffroad}
            climb={climb}
            setClimb={setClimb}
            days={days}
            setDays={setDays}
            stars={stars}
            setStars={setStars}
            style={style}
            setStyle={setStyle}
            setSubstyle={setSubstyle}
            fontPercent={fontPercent}
            setFontPercent={setFontPercent}
            substyle={substyle}
            nickname={nickname}
            setNickname={setNickname}
            role={role}
            setRole={setRole}
          />
        </div>

        {/* Card preview */}
        <div className="col-span-1 m-4">
          <Card
            style={styles[style as StyleName][substyle as SubstyleName]}
            flag={flag}
            name={name}
            age={age}
            endurance={endurance}
            offroad={offroad}
            climb={climb}
            days={days}
            stars={stars}
            image={image}
            fontPercent={fontPercent}
            nickname={nickname}
            role={role}
          />
        </div>

        {/* Card code */}
      </main>
    </>
  );
}

export default App;
