import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeAiLight = ({
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
      d="M13.872 3.666a2.964 2.964 0 0 0-3.743 0l-5.574 4.54a2.97 2.97 0 0 0-1.092 2.299v7.173A3.32 3.32 0 0 0 6.785 21h10.43a3.32 3.32 0 0 0 3.323-3.322v-6.174"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.636 21v-4.917c0-.49.397-.886.886-.886h2.957c.489 0 .886.397.886.886V21M18.127 9.626l.106-.287a3.95 3.95 0 0 1 2.332-2.335l.286-.106-.286-.107a3.95 3.95 0 0 1-2.332-2.334l-.106-.287-.106.287A3.95 3.95 0 0 1 15.69 6.79l-.287.107.287.106a3.95 3.95 0 0 1 2.331 2.335zM12.878 11.471a1.86 1.86 0 0 1 1.234-1.237 1.86 1.86 0 0 1-1.235-1.236 1.86 1.86 0 0 1-1.234 1.236c.591.18 1.054.645 1.234 1.237"
    />
  </Svg>
);
export default IconlystHomeAiLight;
