export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color: color, // 同じ名称は省略可 color
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
