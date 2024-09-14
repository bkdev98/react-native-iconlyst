import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationBold = ({
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
      d="M18.441 12.654a1.47 1.47 0 0 1-.004-1.135l1.869-4.51a2.45 2.45 0 0 0-.595-2.75 2.45 2.45 0 0 0-2.786-.406L4.869 9.861a2.46 2.46 0 0 0-1.367 2.221 2.45 2.45 0 0 0 1.386 2.208l12.026 5.867a2.453 2.453 0 0 0 2.782-.428 2.45 2.45 0 0 0 .575-2.755z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNavigationBold;
