import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystYoutubeBroken = ({
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
      d="M10.229 4.764c-2.023.06-3.722.191-4.285.395a2.58 2.58 0 0 0-1.773 1.882c-.56 1.643-.562 8.338 0 9.992.243.88.915 1.565 1.773 1.807 1.573.57 12.038.588 13.612 0a2.58 2.58 0 0 0 1.773-1.882c.56-1.605.563-8.275 0-9.955a2.58 2.58 0 0 0-1.773-1.881c-.67-.227-2.95-.358-5.47-.389"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.597 14.515a.47.47 0 0 1-.702-.408V9.93a.47.47 0 0 1 .702-.41l3.672 2.088a.47.47 0 0 1 0 .818l-1.205.686"
    />
  </Svg>
);
export default IconlystYoutubeBroken;
