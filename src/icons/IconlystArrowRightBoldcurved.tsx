import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRightBoldcurved = ({
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
      d="M20.75 12c0-3.198-5.477-6.312-6.575-6.904a.999.999 0 1 0-.949 1.76c1.831.989 4.254 2.726 5.159 4.145H4.75a1 1 0 1 0 0 2h13.633c-.906 1.419-3.327 3.156-5.157 4.144a1 1 0 0 0 .949 1.76c1.097-.592 6.57-3.704 6.575-6.902z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowRightBoldcurved;
