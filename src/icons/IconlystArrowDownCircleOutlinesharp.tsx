import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDownCircleOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 12c0-5.522 4.477-10 10-10s10 4.478 10 10-4.478 10-10 10-10-4.478-10-10m10-8.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m8.781 9.497 3.469 3.484 3.469-3.484 1.063 1.058-4.532 4.552-4.532-4.552z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowDownCircleOutlinesharp;
