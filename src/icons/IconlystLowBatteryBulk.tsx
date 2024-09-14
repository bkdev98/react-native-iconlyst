import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLowBatteryBulk = ({
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
      d="M7.405 18.078h7.745c2.687 0 4.364-1.503 4.364-4.265v-3.546c0-2.806-1.677-4.343-4.364-4.343H7.413c-2.695 0-4.364 1.511-4.364 4.273v3.616c-.008 2.762 1.66 4.265 4.356 4.265"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.101 9.064a.75.75 0 0 1 .75-.75h.8c.795 0 1.497.233 1.97.82.444.553.575 1.285.575 2.03v1.708c0 .734-.132 1.46-.58 2.006-.475.578-1.175.804-1.965.804h-.792a.75.75 0 0 1 0-1.5h.792c.511 0 .708-.138.805-.256.124-.15.24-.455.24-1.054v-1.709c0-.612-.117-.93-.244-1.087-.099-.123-.295-.262-.8-.262h-.8a.75.75 0 0 1-.75-.75M8.096 13.8c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.6c0-.41.34-.75.75-.75s.75.34.75.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLowBatteryBulk;
