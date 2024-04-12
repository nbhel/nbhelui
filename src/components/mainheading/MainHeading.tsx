const MainHeading = (props: { title: string }) => {
  return (
    <>
      <h1 className="lg:max-w-2xl max-w-lg mb-4 text-4xl font-extrabold leading-none tracking-tighter md:text-5xl xl:text-6xl">
        {props.title}
      </h1>
    </>
  );
};

export default MainHeading;
