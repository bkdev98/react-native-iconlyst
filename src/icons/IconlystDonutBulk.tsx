import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDonutBulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M11.999 15.612a3.323 3.323 0 0 1-3.319-3.32c0-1.83 1.489-3.32 3.319-3.32s3.319 1.49 3.319 3.32a3.323 3.323 0 0 1-3.319 3.32M12 2.541c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75c.786 0 1.567-.094 2.325-.28a.5.5 0 0 0 .302-.755 2 2 0 0 1-.312-1.07c0-.529.205-1.026.574-1.4a.5.5 0 0 0 .121-.503 2 2 0 0 1-.06-.245 2 2 0 0 1-.029-.344c0-1.265 1.248-2.242 2.486-1.931a.49.49 0 0 0 .497-.153c.677-.769 1.917-.888 2.721-.263a.5.5 0 0 0 .466.08.5.5 0 0 0 .323-.344 9.8 9.8 0 0 0 .336-2.541c0-5.377-4.374-9.75-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.078 8.653a5.33 5.33 0 0 0-1.429 3.64.75.75 0 0 1-1.5 0c0-1.736.65-3.391 1.83-4.661a.75.75 0 1 1 1.1 1.02M17.511 20.723a.75.75 0 0 1-.685-1.05l.004-.009a.75.75 0 0 1 1.371.61.76.76 0 0 1-.69.449M20.432 19.411a.745.745 0 0 1-.723-.941l.003-.01a.751.751 0 0 1 1.448.394.76.76 0 0 1-.728.557"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDonutBulk;
