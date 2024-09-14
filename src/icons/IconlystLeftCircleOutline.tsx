import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftCircleOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.934 15.904a.75.75 0 0 0-.002-1.06l-2.859-2.846 2.858-2.846a.75.75 0 1 0-1.058-1.063l-3.392 3.377a.75.75 0 0 0 0 1.063l3.392 3.377a.75.75 0 0 0 1.06-.002"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 21.75c5.384 0 9.75-4.365 9.75-9.75S17.384 2.25 12 2.25 2.25 6.615 2.25 12s4.366 9.75 9.75 9.75M20.25 12a8.25 8.25 0 1 1-16.5 0 8.25 8.25 0 0 1 16.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftCircleOutline;
