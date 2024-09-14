import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGiftBroken = ({
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
      d="M3 12v3.974C3 18.919 4.834 21 7.782 21h8.434C19.165 21 21 18.919 21 15.974V8.026C21 5.081 19.165 3 16.217 3H7.782C4.842 3 3 5.081 3 8.026v.798"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.5 14.045c0-1.74 1.209-3.15 2.7-3.15.642 0 1.161.52 1.161 1.161 0 1.401-1.729 2.538-3.862 2.538s-3.862-1.137-3.862-2.538c0-.642.52-1.161 1.162-1.161 1.49 0 2.699 1.41 2.699 3.15M10.63 17.744l2.868-3.15 2.866 3.15M21 14.672H3M13.498 5.953V21"
    />
  </Svg>
);
export default IconlystGiftBroken;
