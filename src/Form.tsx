import classNames from "classnames";
import CountrySelector from "./CountrySelector";

export type FormProps = {
  name: string;
  setName: (name: string) => void;
  age: number;
  setAge: (age: number) => void;
  flag: string;
  setFlag: (flag: string) => void;
  endurance: number;
  setEndurance: (endurance: number) => void;
  offroad: number;
  setOffroad: (offroad: number) => void;
  climb: number;
  setClimb: (climb: number) => void;
  days: number;
  setDays: (days: number) => void;
  stars: number;
  setStars: (stars: number) => void;
  style: string;
  setStyle: (style: string) => void;
  fontPercent: number;
  setFontPercent: (fontPercent: number) => void;
  substyle: string;
  setSubstyle: (substyle: string) => void;
  nickname: string;
  setNickname: (nickname: string) => void;
  role: string;
  setRole: (role: string) => void;
};

export function Form({
  name,
  setName,
  age,
  setAge,
  //   flag,
  setFlag,
  endurance,
  setEndurance,
  offroad,
  setOffroad,
  climb,
  setClimb,
  days,
  setDays,
  stars,
  setStars,
  // style,
  setStyle,
  fontPercent,
  setFontPercent,
  substyle,
  setSubstyle,
  nickname,
  setNickname,
  role,
  setRole,
}: FormProps) {
  const formWrapperClasses = classNames("flex items-center");
  const formLabelClasses = classNames("text-gray-700 w-1/4");
  const formInputClasses = classNames("mt-1 w-3/4  border-gray-600 border-1");

  return (
    <div>
      <label className={formWrapperClasses}>
        <span className={formLabelClasses}>Style</span>
        <select
          onChange={(n) => setStyle(n.target.value)}
          className={formInputClasses}
        >
          <option value="Desertus">Desertus</option>
          <option value="Nomadian">Nomadian</option>
        </select>
      </label>

      <label className={formWrapperClasses}>
        <span className={formLabelClasses}>Participant</span>
        <select
          onChange={(n) => setSubstyle(n.target.value)}
          className={formInputClasses}
        >
          <option value="Racer">Participant</option>
          <option value="Staff">Staff</option>
        </select>
      </label>

      <hr className="m-4 border-desert" />

      <label className={formWrapperClasses}>
        <span className={formLabelClasses}>Texte {fontPercent} %</span>
        <input
          type="range"
          min="80"
          max="115"
          step="1"
          defaultValue="100"
          className={"w-1/2" + formInputClasses}
          onChange={(n) => setFontPercent(Number(n.target.value))}
        />
      </label>

      <label className={formWrapperClasses}>
        <span className={formLabelClasses}>Nom</span>
        <input
          type="text"
          className={formInputClasses}
          value={name}
          onChange={(n) => setName(n.target.value)}
        />
      </label>

      <label className={formWrapperClasses}>
        <span className={formLabelClasses}>Age</span>
        <input
          type="number"
          className={formInputClasses}
          value={age}
          onChange={(n) => setAge(Number(n.target.value))}
        />
      </label>

      <label className={formWrapperClasses}>
        <span className={formLabelClasses}>Pays</span>

        <CountrySelector
          id={"flag"}
          onCountryChange={(country) => {
            setFlag(country.value);
          }}
          formInputClasses={formInputClasses}
        />
      </label>

      <hr className="m-4" />
      {substyle}
      {substyle === "Racer" && (
        <>
          <label className={formWrapperClasses}>
            <span className={formLabelClasses}>Endurance</span>
            <input
              type="number"
              className={formInputClasses}
              value={endurance}
              onChange={(n) => setEndurance(Number(n.target.value))}
            />
          </label>

          <label className={formWrapperClasses}>
            <span className={formLabelClasses}>Grimpe</span>
            <input
              type="number"
              className={formInputClasses}
              value={climb}
              onChange={(n) => setClimb(Number(n.target.value))}
            />
          </label>

          <label className={formWrapperClasses}>
            <span className={formLabelClasses}>Hors piste</span>
            <input
              type="number"
              className={formInputClasses}
              value={offroad}
              onChange={(n) => setOffroad(Number(n.target.value))}
            />
          </label>

          <hr className="m-4" />

          <label className={formWrapperClasses}>
            <span className={formLabelClasses}>Objectif</span>
            <input
              type="number"
              className={formInputClasses}
              value={days}
              onChange={(n) => setDays(Number(n.target.value))}
            />
          </label>

          <label className={formWrapperClasses}>
            <span className={formLabelClasses}>Cactus</span>
            <input
              type="number"
              className={formInputClasses}
              value={stars}
              onChange={(n) => setStars(Number(n.target.value))}
              step={0.5}
              max={3}
              min={0.5}
            />
          </label>
        </>
      )}

      {substyle === "Staff" && (
        <>
          <label className={formWrapperClasses}>
            <span className={formLabelClasses}>Surnom</span>
            <input
              type="text"
              className={formInputClasses}
              value={nickname}
              onChange={(n) => setNickname(n.target.value)}
            />
          </label>
          <label className={formWrapperClasses}>
            <span className={formLabelClasses}>Role</span>
            <input
              type="text"
              className={formInputClasses}
              value={role}
              onChange={(n) => setRole(n.target.value)}
            />
          </label>
        </>
      )}
    </div>
  );
}
