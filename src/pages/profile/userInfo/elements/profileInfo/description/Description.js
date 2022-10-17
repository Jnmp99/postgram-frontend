const Description = (props) => {
  const { description } = props;
  return (
    <>
      {description && (
        <div className="profileDescription">
          <p>{description}</p>
        </div>
      )}
    </>
  );
};

export default Description;
