import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeptagonOutline = ({
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
      d="M10.814 2.739a3.31 3.31 0 0 1 2.872 0l5.164 2.486a3.31 3.31 0 0 1 1.791 2.246l1.276 5.589a3.31 3.31 0 0 1-.639 2.8l-3.575 4.481a3.31 3.31 0 0 1-2.587 1.247H9.384a3.31 3.31 0 0 1-2.588-1.247l-3.573-4.48a3.3 3.3 0 0 1-.64-2.802L3.86 7.471a3.31 3.31 0 0 1 1.79-2.245zm.65 1.351L6.301 6.577c-.497.24-.857.692-.98 1.228l-1.275 5.589c-.123.536.005 1.1.349 1.53l3.574 4.482c.343.43.864.682 1.415.682h5.732a1.81 1.81 0 0 0 1.415-.682l3.574-4.481a1.81 1.81 0 0 0 .35-1.532l-1.276-5.588a1.81 1.81 0 0 0-.98-1.228L13.035 4.09a1.81 1.81 0 0 0-1.57 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeptagonOutline;
