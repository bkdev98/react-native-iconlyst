import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinWifiBold = ({
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
      d="M16.005 9.792a.75.75 0 0 1-1.054.117 4.75 4.75 0 0 0-5.902 0 .75.75 0 1 1-.937-1.171c2.254-1.804 5.522-1.804 7.775 0a.75.75 0 0 1 .117 1.054m-1.687 2.125a.75.75 0 0 1-1.057.089 1.96 1.96 0 0 0-2.511.002.745.745 0 0 1-1.057-.083.75.75 0 0 1 .082-1.057 3.43 3.43 0 0 1 4.452-.008.75.75 0 0 1 .09 1.057m-1.567 1.619a.75.75 0 0 1-1.5 0c0-.414.335-.77.75-.77.414 0 .75.315.75.729zM12 2.5c-4.427 0-8.027 3.601-8.027 8.027 0 5.636 6.592 10.973 8.027 10.973s8.025-5.337 8.025-10.973c0-4.426-3.6-8.027-8.025-8.027"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinWifiBold;
