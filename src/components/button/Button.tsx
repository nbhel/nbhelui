const Button = (props: {
  title: string;
  type: "dark" | "light";
  onClick?: () => void;
}) => {
  return (
    <>
      <button
        type="button"
        onClick={props.onClick}
        className={`${
          props.type === "dark" &&
          "text-white bg-primary hover:bg-white hover:text-primary"
        } ${
          props.type === "light" &&
          "text-primary bg-white hover:bg-primary hover:text-white"
        } border border-primary font-medium rounded text-sm px-5 py-2.5`}
      >
        {props.title}
      </button>
    </>
  );
};

export default Button;
