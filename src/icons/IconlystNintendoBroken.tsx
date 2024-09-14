import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNintendoBroken = ({
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
      d="M3.75 15.98c0 2.948 1.83 5.02 4.778 5.02h2.704V3H8.528C5.589 3 3.75 5.082 3.75 8.03v3.975M21.75 8.02c0-2.948-1.83-5.02-4.777-5.02h-2.705v18h2.705c2.938 0 4.777-2.082 4.777-5.03v-3.975"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.096 15.93V16m.282-.055a.284.284 0 1 1-.568 0 .284.284 0 0 1 .568 0M7.41 8.069v.069m.282-.054a.284.284 0 1 1-.568 0 .284.284 0 0 1 .568 0"
    />
  </Svg>
);
export default IconlystNintendoBroken;
