import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKelvinDegreeTwoTone = ({
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
      d="M5.032 6.425a1.713 1.713 0 1 0 0-3.426 1.713 1.713 0 0 0 0 3.426"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.603 6.088a1.306 1.306 0 0 1-.169 1.84l-5.387 4.483 5.537 6.309a1.306 1.306 0 1 1-1.963 1.723l-5.582-6.36-1.267 1.053v4.446a1.306 1.306 0 1 1-2.612 0V6.924a1.306 1.306 0 1 1 2.612 0v4.814l6.991-5.818a1.306 1.306 0 0 1 1.84.168"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystKelvinDegreeTwoTone;
