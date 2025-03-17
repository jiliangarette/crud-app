const SectionContainer = ({ children, id }) => {
  const classes = "  place-items-center";
  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
};

export default SectionContainer;
