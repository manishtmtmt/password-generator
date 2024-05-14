interface ILevelbar {
  isFilled: boolean;
  color: string;
}

const Levelbar = ({ isFilled, color }: ILevelbar) => {
  return isFilled ? (
    <span
      className={`md:w-4 w-3 h-8 border-2 ${
        color === "red"
          ? "border-red bg-red"
          : color == "orange"
          ? "border-orange bg-orange"
          : color == "yellow"
          ? "border-yellow bg-yellow"
          : "border-neon-green bg-neon-green"
      }`}
    ></span>
  ) : (
    <span className="md:w-4 w-3 h-8 border-2"></span>
  );
};

export default Levelbar;
