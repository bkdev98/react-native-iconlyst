import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOnionHalfLight = ({
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
      d="M11.548 3s-.258 1.058-1.383 1.824c-2.342 1.593-6.018 3.743-6.02 7.402 0 3.47 3.517 6.284 7.855 6.284s7.855-2.814 7.855-6.284c-.002-3.377-2.343-5.024-4.462-6.554-.644-.465-1.198-.848-1.734-1.671M12 21v-2.43M12.982 18.51l1.882 1.883M11.018 18.51l-1.881 1.883"
    />
    <Circle
      cx={12}
      cy={12}
      r={1.977}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Circle
      cx={12}
      cy={12}
      r={4.563}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);
export default IconlystOnionHalfLight;
