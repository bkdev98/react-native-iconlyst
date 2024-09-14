import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchListBold = ({
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
      d="M15.534 11.088c-.818 0-1.588.32-2.167.899a3.07 3.07 0 0 0 0 4.337c1.155 1.159 3.174 1.162 4.335.002l.003-.003.001-.001a3.07 3.07 0 0 0-.002-4.334 3.05 3.05 0 0 0-2.17-.9m5.081 9.153a1 1 0 0 1-.708-.294l-1.566-1.57a5.03 5.03 0 0 1-2.806.847 5.03 5.03 0 0 1-3.584-1.486 5.074 5.074 0 0 1 .001-7.164 5.03 5.03 0 0 1 3.582-1.486c1.353 0 2.627.528 3.585 1.486a5.08 5.08 0 0 1 .635 6.388l1.57 1.573a.999.999 0 0 1-.709 1.706M21 5.762H3a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2m-13.5 6.75H3a1 1 0 1 1 0-2h4.5a1 1 0 1 1 0 2m0 6.75H3a1 1 0 1 1 0-2h4.5a1 1 0 1 1 0 2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchListBold;
