import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIconlyProCircleTwoTone = ({
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
    <Circle
      cx={12}
      cy={12}
      r={9}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.951 8.034c2.245-2.191 5.884-2.191 8.129 0l-1.6 1.561a3.546 3.546 0 0 0-4.929 0 3.343 3.343 0 0 0 0 4.81 3.546 3.546 0 0 0 4.928 0l1.6 1.561c-2.244 2.191-5.883 2.191-8.128 0a5.514 5.514 0 0 1 0-7.932"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystIconlyProCircleTwoTone;
