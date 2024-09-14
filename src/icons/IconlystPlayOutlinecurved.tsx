import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayOutlinecurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.78 16.059c.216.214.48.293.76.293.363 0 .752-.131 1.092-.272.8-.332 4.533-2.385 4.533-3.827 0-1.42-3.653-3.434-4.587-3.82-.378-.157-1.262-.521-1.797.013-.153.153-.615.619-.628 3.785-.013 3.187.47 3.67.628 3.828m1.037-1.263c-.22-1.034-.217-3.964.003-5.061.998.345 3.276 1.847 3.787 2.52-.513.698-2.82 2.23-3.79 2.54"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2 12.396c0 7.383 2.617 10 10 10s10-2.617 10-10-2.617-10-10-10-10 2.617-10 10m1.5 0c0-6.514 1.986-8.5 8.5-8.5s8.5 1.986 8.5 8.5-1.986 8.5-8.5 8.5-8.5-1.986-8.5-8.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlayOutlinecurved;
