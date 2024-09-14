import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoveMessageLikeBroken = ({
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
      d="M12.128 20.1h-4.07c-2.737.007-4.581-2.24-4.581-5.006v-6.18C3.477 6.15 5.32 3.9 8.058 3.9h8.837c2.737 0 4.582 2.25 4.582 5.013v6.181c0 2.766-1.845 5.013-4.582 5.006h-1.238M7.902 15.153 4.15 17.728M20.807 17.727l-3.752-2.575M7.155 8.34 4.148 6.28M20.81 6.28l-2.997 2.06"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.862 14.876s-2.557-.987-3.319-2.612c-.486-1.024-.247-2.302.828-2.815a1.95 1.95 0 0 1 1.771.06 1.93 1.93 0 0 1 1.695-.525c1.172.211 1.737 1.38 1.538 2.498-.115.64-.47 1.256-.877 1.784"
    />
  </Svg>
);
export default IconlystLoveMessageLikeBroken;
