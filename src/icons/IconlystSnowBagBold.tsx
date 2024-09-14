import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowBagBold = ({
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
      d="M7.866 7.795a.3.3 0 0 0 .206.15c2.575.486 5.174.494 7.75.02a.3.3 0 0 0 .218-.171l1.412-3.132a.5.5 0 0 0-.523-.701c-.425.057-1.598.208-1.914.226-1.39.07-2.671-.341-3.75-.761-1.482-.576-2.896-.356-4.2.654-.396.306-.553.444-.553.444a.5.5 0 0 0-.109.618zM14.415 15.825a.75.75 0 0 1-.75 1.299l-.916-.53v1.058a.75.75 0 0 1-1.5 0v-1.058l-.916.53a.747.747 0 0 1-1.024-.275.75.75 0 0 1 .274-1.024l.916-.528-.916-.53a.75.75 0 0 1 .75-1.297l.916.527V12.94a.75.75 0 0 1 1.5 0v1.058l.916-.528a.749.749 0 1 1 .75 1.297l-.916.53zm3.357-4.151c-.426-.708-.874-1.41-1.322-2.11a.3.3 0 0 0-.31-.134 22.5 22.5 0 0 1-4.14.393 22.5 22.5 0 0 1-4.137-.392.3.3 0 0 0-.31.132c-.45.7-.9 1.401-1.326 2.11-1.178 1.96-2.353 4.254-1.385 6.67 1.334 3.326 5.444 3.747 7.165 3.773 1.706-.026 5.816-.447 7.15-3.773.968-2.415-.208-4.709-1.385-6.67"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSnowBagBold;
