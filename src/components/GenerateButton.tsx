import { FaArrowRight } from "react-icons/fa";

import { Button } from "./ui/button";

interface IGenerateButton {
  isDisabled: boolean;
  handleGeneratePassword: () => void;
}

const GenerateButton = ({
  isDisabled,
  handleGeneratePassword,
}: IGenerateButton) => {
  return (
    <Button
      className={`w-full uppercase mt-6 border-neon-green bg-neon-green text-dark-grey text-xl p-6 font-semibold hover:bg-transparent hover:text-neon-green ${
        isDisabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      variant={"outline"}
      disabled={isDisabled}
      onClick={handleGeneratePassword}
    >
      Generate
      <FaArrowRight size={16} className="ml-4" />
    </Button>
  );
};

export default GenerateButton;
