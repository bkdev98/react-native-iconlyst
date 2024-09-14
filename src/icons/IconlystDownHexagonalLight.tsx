import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownHexagonalLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 15.87V8.13m0 7.742 3.02-3.031m-3.02 3.03L8.98 12.84M4.99 7.19a2.2 2.2 0 0 1 2.2-2.2h1c.58 0 1.137-.231 1.55-.64l.698-.7a2.2 2.2 0 0 1 3.112-.01v.002l.01.007.7.7c.41.41.968.64 1.549.64h1.002a2.2 2.2 0 0 1 2.2 2.2v1c0 .58.23 1.137.64 1.55l.7.7a2.2 2.2 0 0 1 .01 3.11l-.71.71c-.41.412-.639.968-.639 1.55v1.003a2.2 2.2 0 0 1-2.2 2.196h-1.005c-.58 0-1.138.23-1.55.64l-.7.699a2.2 2.2 0 0 1-3.11.013l-.71-.71a2.2 2.2 0 0 0-1.55-.64H7.19a2.2 2.2 0 0 1-2.199-2.198v-1.006c0-.58-.23-1.137-.64-1.548l-.699-.7a2.2 2.2 0 0 1-.015-3.109l.712-.713c.41-.412.64-.97.64-1.55V7.19"
    />
  </Svg>
);
export default IconlystDownHexagonalLight;
