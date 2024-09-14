import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiShieldOutline = ({
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
      fill={props.color}
      d="M12.01 21.75c-.07 0-.15-.01-.22-.03-.32-.1-7.86-2.45-7.86-9.05 0-1.84-.02-3.16-.04-4.14-.04-2.43-.05-2.94.58-3.57.75-.75 6.45-2.71 7.53-2.71 1.15 0 6.77 1.94 7.53 2.71.63.64.62 1.14.58 3.58-.02.97-.04 2.3-.04 4.13 0 6.6-7.54 8.95-7.86 9.05a.8.8 0 0 1-.22.03zm0-18c-.8 0-5.89 1.8-6.48 2.28-.16.16-.17.49-.13 2.47.02.98.04 2.31.04 4.16 0 4.91 5.41 7.12 6.57 7.54 1.16-.42 6.57-2.63 6.57-7.54 0-1.84.02-3.18.04-4.15.04-1.99.03-2.32-.15-2.5-.58-.48-5.66-2.27-6.47-2.27z"
    />
    <Path
      fill={props.color}
      d="M12.01 14.51c-.41 0-.75-.34-.75-.75V3c0-.41.34-.75.75-.75s.75.34.75.75v10.76c0 .41-.34.75-.75.75"
    />
    <Path
      fill={props.color}
      d="M12.01 16.81a1.9 1.9 0 1 1-.001-3.799 1.9 1.9 0 0 1 .001 3.799m0-2.3c-.22 0-.4.18-.4.4s.18.4.4.4.4-.18.4-.4-.18-.4-.4-.4M15.62 10.74c-.41 0-.75-.34-.75-.75V4.06c0-.41.34-.75.75-.75s.75.34.75.75v5.93c0 .41-.34.75-.75.75"
    />
    <Path
      fill={props.color}
      d="M15.62 13.04a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 1 1 0 3.8m0-2.3c-.22 0-.4.18-.4.4s.18.4.4.4.4-.18.4-.4-.18-.4-.4-.4M8.4 10.74c-.41 0-.75-.34-.75-.75V4.06c0-.41.34-.75.75-.75s.75.34.75.75v5.93c0 .41-.34.75-.75.75"
    />
    <Path
      fill={props.color}
      d="M8.4 13.04a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 1 1 0 3.8m0-2.3c-.22 0-.4.18-.4.4s.18.4.4.4.4-.18.4-.4-.18-.4-.4-.4"
    />
  </Svg>
);
export default IconlystAiShieldOutline;
