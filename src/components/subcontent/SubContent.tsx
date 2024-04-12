const SubContent = (props: { title: string; lgSize: "xl" | "md" }) => {
  return (
    <>
      <p
        className={`lg:max-w-2xl max-w-lg mb-6 font-light text-lightgray lg:mb-8 md:text-lg lg:text-${props.lgSize}`}
      >
        {props.title}
      </p>
    </>
  );
};

export default SubContent;
