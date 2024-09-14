import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKitchenHat1Bold = ({
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
      d="M7.932 5.212c.869-1.334 2.354-2.224 4.064-2.224a4.82 4.82 0 0 1 4.066 2.225q.147-.012.303-.012a5.136 5.136 0 0 1 5.135 5.136 5.13 5.13 0 0 1-3.329 4.81l-.232 3.43a2.61 2.61 0 0 1-2.604 2.434H8.667a2.61 2.61 0 0 1-2.605-2.433l-.231-3.43a5.136 5.136 0 0 1 1.805-9.947 4 4 0 0 1 .296.011m1.547 11.36a.75.75 0 0 0 0 1.5h5.044a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKitchenHat1Bold;
