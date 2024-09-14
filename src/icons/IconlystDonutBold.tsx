import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDonutBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.871 19.283a.75.75 0 0 0-.99.381l-.004.01a.745.745 0 0 0 .684 1.048.76.76 0 0 0 .691-.449.75.75 0 0 0-.381-.99M20.684 17.933a.747.747 0 0 0-.921.526l-.003.01a.744.744 0 0 0 .723.943.756.756 0 0 0 .726-.558.75.75 0 0 0-.526-.921M11.999 15.612a3.323 3.323 0 0 1-3.319-3.32c0-1.83 1.489-3.32 3.319-3.32s3.319 1.49 3.319 3.32a3.323 3.323 0 0 1-3.319 3.32m-3.92-6.96a5.33 5.33 0 0 0-1.429 3.64.75.75 0 0 1-1.5 0c0-1.735.65-3.39 1.83-4.66a.75.75 0 1 1 1.099 1.02M12 2.542c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75c.786 0 1.567-.094 2.325-.28a.5.5 0 0 0 .302-.755 2 2 0 0 1-.312-1.07c0-.529.205-1.026.574-1.4a.5.5 0 0 0 .121-.503 2 2 0 0 1-.06-.245 2 2 0 0 1-.029-.344c0-1.265 1.248-2.242 2.486-1.931a.49.49 0 0 0 .497-.153c.677-.769 1.917-.888 2.721-.263a.5.5 0 0 0 .466.08.5.5 0 0 0 .323-.344 9.8 9.8 0 0 0 .336-2.541c0-5.377-4.374-9.75-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDonutBold;
