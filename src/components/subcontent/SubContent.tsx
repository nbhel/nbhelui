const SubContent = (props: { title: string; lgSize: "xl" | "md" }) => {
  return (
    <div className="flex justify-center">
      <p
        className={`lg:max-w-2xl max-w-lg mb-6 font-light text-lightgray lg:mb-8 md:text-lg lg:text-${props.lgSize}`}
      >
        {props.title}
      </p>
    </div>
  );
};

export default SubContent;
