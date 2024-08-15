const Slide = ({ image }) => {
  return (
    <div
      className="slide h-full flex justify-center items-center"
      style={{ backgroundImage: `url(${image.src})` }}
      key={image.id}
    >
    </div>
  );
};

export default Slide;
