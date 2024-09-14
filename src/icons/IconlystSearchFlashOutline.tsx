import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchFlashOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.632 3.887a7.668 7.668 0 1 0 .001 15.335 7.668 7.668 0 0 0-.001-15.335m-9.167 7.667a9.167 9.167 0 0 1 9.167-9.167 9.167 9.167 0 0 1 9.167 9.167 9.168 9.168 0 1 1-18.334 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.83 17.189a.75.75 0 0 1 1.061-.001l3.425 3.417a.75.75 0 0 1-1.06 1.062l-3.424-3.417a.75.75 0 0 1-.002-1.061M10.678 6.818c.71-.979 2.257-.475 2.257.733v2.144h1.989c1.02 0 1.608 1.157 1.01 1.981h-.001l-3.347 4.61c-.711.98-2.258.475-2.258-.732v-2.145H8.34a1.247 1.247 0 0 1-1.01-1.98m0 0 3.348-4.611m.757 1.51-2.6 3.58h2.243a.75.75 0 0 1 .75.75v2.119l2.6-3.582h-2.243a.75.75 0 0 1-.75-.75zm.45699999999999985-.6290000000000004"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchFlashOutline;
