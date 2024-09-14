import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag2Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 16.582c0 2.337-1.456 3.988-3.795 3.988H7.297c-2.34 0-3.797-1.65-3.797-3.988v-6.307c0-2.337 1.457-3.988 3.796-3.988h10.41c2.332 0 3.794 1.651 3.794 3.988V12.9M15.86 6.26V5.65a2.22 2.22 0 0 0-2.22-2.22h-2.28c-1.226 0-2.22.994-2.22 2.22v.611"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.88 16.252H7.402a.7.7 0 0 1-.7-.7v-1.657a.7.7 0 0 1 .7-.7h3.478a.7.7 0 0 1 .7.7v1.657a.7.7 0 0 1-.7.7"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.788 20.55V9.17M8.21 6.321v6.876m0 7.35v-4.293"
    />
  </Svg>
);
export default IconlystBag2Broken;
