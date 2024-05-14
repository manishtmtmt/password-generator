import { FaRegCopy } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

interface IPassword {
  password: string;
  copyHandler: () => void;
  isCopied: boolean;
}

const Display = ({ password, copyHandler, isCopied }: IPassword) => {
  return (
    <div className="w-full bg-dark-grey md:p-6 p-4 flex items-center justify-between mb-6">
      <h2
        className={`md:text-2xl ${
          !password ? "text-grey" : "text-almost-white"
        }`}
      >
        {password ? password : "P4$5W0rD!"}
      </h2>
      {isCopied ? (
        <TiTick className="text-neon-green md:text-3xl text-xl" />
      ) : (
        <FaRegCopy
          className="text-neon-green hover:text-white cursor-pointer md:text-3xl text-xl"
          onClick={copyHandler}
        />
      )}
    </div>
  );
};

export default Display;
