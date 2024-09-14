import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserDeleteBold = ({
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
      d="M19.083 20.646a1 1 0 0 1-.707-.293l-1.096-1.096-1.059 1.06a.999.999 0 1 1-1.414-1.415l1.058-1.06-1.094-1.094a1 1 0 0 1 1.415-1.414l1.094 1.094 1.06-1.06a1 1 0 0 1 1.414 1.414l-1.06 1.06 1.096 1.097a.999.999 0 0 1-.707 1.707M11.429 3.25a4.88 4.88 0 0 0-4.875 4.875 4.88 4.88 0 0 0 4.875 4.876 4.88 4.88 0 0 0 4.875-4.876 4.88 4.88 0 0 0-4.875-4.875M11.428 14.52c-4.98 0-7.21 2.75-7.21 5.48a.75.75 0 0 0 .75.75l5.81-.01 1.176-.002q.158-.005.305-.053c.425-.121.7-.47.7-.964v-4.183c0-.613-.444-1.018-1.531-1.018"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserDeleteBold;
