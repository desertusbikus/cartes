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
}: FormProps) {
  const formWrapperClasses = classNames("flex items-center");
  const formLabelClasses = classNames("text-gray-700 w-1/4");
  const formInputClasses = classNames("mt-1 w-3/4  border-gray-600 border-1");

  return (
    <div>
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
        <span className={formLabelClasses}>Grimpeur</span>
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
    </div>
  );
}
