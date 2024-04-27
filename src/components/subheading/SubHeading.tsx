const SubHeading = (props: { title: string }) => {
  return (
    <>
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 text-left">
        {props.title}
      </h2>
    </>
  );
};

export default SubHeading;
