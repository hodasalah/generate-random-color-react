import Box from "./Box";

export default function BoxContainer(props) {
  return (
    <div className="container">
      {Array.from({ length: props.numOfBoxes }).map((box) => (
        <Box />
      ))}
    </div>
  );
}
BoxContainer.defaultProps = {
  numOfBoxes: 18
};
