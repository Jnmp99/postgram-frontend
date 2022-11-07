interface mainProps {
  description: string | undefined;
}

const Description = (props: mainProps) => {
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
