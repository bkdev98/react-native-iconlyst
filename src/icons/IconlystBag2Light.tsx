import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag2Light = ({
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
      d="M17.205 6.287H6.795C4.458 6.287 3 7.938 3 10.275v6.307c0 2.337 1.457 3.988 3.797 3.988h10.408c2.34 0 3.795-1.65 3.795-3.988v-6.307c0-2.337-1.462-3.988-3.795-3.988M15.36 6.26V5.65a2.22 2.22 0 0 0-2.22-2.22h-2.28a2.22 2.22 0 0 0-2.22 2.22v.611"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.38 16.252H6.902a.7.7 0 0 1-.7-.7v-1.657a.7.7 0 0 1 .7-.7h3.478a.7.7 0 0 1 .7.7v1.657a.7.7 0 0 1-.7.7"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.288 20.55V6.322M7.71 6.321v6.876m0 7.35v-4.293"
    />
  </Svg>
);
export default IconlystBag2Light;
