import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserLoadBroken = ({
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
      d="m3.4 17.762 2.568.594.59-2.553M21.4 6.238l-2.567-.593-.59 2.553M9.22 15.925c0-1.157.916-2.602 3.544-2.602 2.635 0 3.551 1.431 3.551 2.588"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.996 18.14a8.86 8.86 0 0 1-1.61-9.995M6.081 5.747a8.85 8.85 0 0 1 7.854-2.479M18.72 18.251a8.85 8.85 0 0 1-7.853 2.48M18.806 5.86a8.86 8.86 0 0 1 2.093 8.764M15.03 9.128a2.265 2.265 0 1 1-2.265-2.265"
    />
  </Svg>
);
export default IconlystUserLoadBroken;
