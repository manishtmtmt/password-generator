import Levelbar from "./Levelbar";

interface IStrengthMeter {
  strength: number;
  password: string;
}

type Str = {
  [key: number]: string;
};

const StrengthMeter = ({ strength, password }: IStrengthMeter) => {
  const strText: Str = {
    0: "too weak",
    1: "too weak",
    2: "weak",
    3: "medium",
    4: "strong",
  };

  const color: Str = {
    0: "red",
    1: "red",
    2: "orange",
    3: "yellow",
    4: "neon-green",
  };
  return (
    <div className="bg-very-dark-grey mt-4 flex items-center justify-between md:p-6 p-4">
      <div className="uppercase text-grey font-semibold">Strength</div>
      <div className="flex items-center md:gap-4 gap-3">
        <h4 className="uppercase text-almost-white md:text-2xl text-xl font-bold">
          {password && strText[strength]}
        </h4>
        <div className="flex gap-2">
          <Levelbar
            color={color[strength]}
            isFilled={!!password && strength >= 0}
          />
          <Levelbar
            color={color[strength]}
            isFilled={!!password && strength >= 2}
          />
          <Levelbar
            color={color[strength]}
            isFilled={!!password && strength >= 3}
          />
          <Levelbar
            color={color[strength]}
            isFilled={!!password && strength >= 4}
          />
        </div>
      </div>
    </div>
  );
};

export default StrengthMeter;
