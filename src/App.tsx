import { useState } from "react";
import Display from "./components/Display";
import { Slider } from "./components/ui/slider";
import { Checkbox } from "./components/ui/checkbox";
import StrengthMeter from "./components/StrengthMeter";
import GenerateButton from "./components/GenerateButton";
import { generateNewPassword } from "./helpers/generateNewPassword";
import { evalStrength } from "./helpers/evalStrength";

export interface IParams {
  [uppLetters: string]: boolean;
  lowLetters: boolean;
  numbers: boolean;
  symbols: boolean;
}

function App() {
  const [password, setPassword] = useState<string>("");
  const [length, setLength] = useState<number>(0);
  const [strength, setStrength] = useState<number>(0);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [params, setParams] = useState<IParams>({
    uppLetters: false,
    lowLetters: false,
    numbers: false,
    symbols: false,
  });

  const handleCheck = (checked: string) => {
    setParams({
      ...params,
      [checked]: !params[checked],
    });
  };

  const isDisabled =
    length === 0 || Object.values(params).every((value) => value === false);

  const handleGeneratePassword = () => {
    const newPassword = generateNewPassword(length, params);
    setPassword(newPassword);

    const passwordStrength = evalStrength(newPassword);
    setStrength(passwordStrength);
  };

  const copyHandler = () => {
    navigator.clipboard.writeText(password ? password : "P4$5W0rD!");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div className="max-w-[32rem] w-full">
      <h1 className="text-2xl text-grey text-center mb-8">
        Password Generator
      </h1>
      <Display password={password} copyHandler={copyHandler} isCopied={isCopied} />
      <div className="w-full bg-dark-grey md:p-6 p-4">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <span className="text-almost-white">Character Length</span>
            <h3 className="text-neon-green text-3xl">{length}</h3>
          </div>
          <Slider
            defaultValue={[length]}
            max={20}
            onValueChange={([step]) => setLength(step)}
          />
        </div>
        <div className="flex items-center space-x-2 py-2 text-xl gap-2">
          <Checkbox
            id="uppercase"
            className="w-5 h-5 border border-background hover:border-neon-green"
            onClick={() => handleCheck("uppLetters")}
          />
          <label htmlFor="uppercase">Include Uppercase Letters</label>
        </div>
        <div className="flex items-center space-x-2 py-2 text-xl gap-2">
          <Checkbox
            id="lowercase"
            className="w-5 h-5 border border-background hover:border-neon-green"
            onClick={() => handleCheck("lowLetters")}
          />
          <label htmlFor="lowercase">Include Lowercase Letters</label>
        </div>
        <div className="flex items-center space-x-2 py-2 text-xl gap-2">
          <Checkbox
            id="numbers"
            className="w-5 h-5 border border-background hover:border-neon-green"
            onClick={() => handleCheck("numbers")}
          />
          <label htmlFor="numbers">Include Numbers</label>
        </div>
        <div className="flex items-center space-x-2 py-2 text-xl gap-2">
          <Checkbox
            id="symbols"
            className="w-5 h-5 border border-background hover:border-neon-green"
            onClick={() => handleCheck("symbols")}
          />
          <label htmlFor="symbols">Include Symbols</label>
        </div>
        <StrengthMeter strength={strength} password={password} />
        <GenerateButton
          isDisabled={isDisabled}
          handleGeneratePassword={handleGeneratePassword}
        />
      </div>
    </div>
  );
}

export default App;
