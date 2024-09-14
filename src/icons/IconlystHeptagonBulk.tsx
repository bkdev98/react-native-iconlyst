import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeptagonBulk = ({
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
      d="M11.976 2.81a3.1 3.1 0 0 0-1.299.295l-.005.003-5.165 2.49a3.05 3.05 0 0 0-1.654 2.08l-1.275 5.589c-.21.909.005 1.851.59 2.584l3.574 4.48a3.04 3.04 0 0 0 2.392 1.159h2.842z"
    />
    <Path
      fill={props.color}
      d="M11.976 21.49V2.81c.46-.003.92.096 1.347.297l5.17 2.492a3.05 3.05 0 0 1 1.655 2.079l1.275 5.59a3.04 3.04 0 0 1-.589 2.582l-3.576 4.48a3.05 3.05 0 0 1-2.392 1.16z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHeptagonBulk;
