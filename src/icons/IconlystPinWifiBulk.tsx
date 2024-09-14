import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinWifiBulk = ({
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
      d="M12 2.5c-4.425 0-8.026 3.6-8.026 8.026C3.974 16.162 10.566 21.5 12 21.5s8.026-5.338 8.026-10.974C20.026 6.1 16.425 2.5 12 2.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.004 9.792a.75.75 0 0 1-1.054.117 4.75 4.75 0 0 0-5.9 0 .75.75 0 1 1-.938-1.171c2.253-1.804 5.522-1.804 7.775 0a.75.75 0 0 1 .117 1.054m-1.687 2.125a.75.75 0 0 1-1.057.089 1.96 1.96 0 0 0-2.51.002.745.745 0 0 1-1.057-.083.75.75 0 0 1 .082-1.057 3.43 3.43 0 0 1 4.452-.008.75.75 0 0 1 .09 1.057m-1.567 1.619a.75.75 0 0 1-1.5 0c0-.414.336-.77.75-.77s.75.315.75.729z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinWifiBulk;
