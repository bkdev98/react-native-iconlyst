import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLightbulbBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.344 7.992a2.97 2.97 0 1 1-4.687 0M12 6.492v1.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.663 8.491c.703 3.39-1.142 6.513-3.977 7.712v2.253a2.69 2.69 0 0 1-2.68 2.68 2.69 2.69 0 0 1-2.68-2.68v-2.265a6.77 6.77 0 0 1-4.138-6.247c0-4.23 3.862-7.55 8.242-6.663a6.7 6.7 0 0 1 3.092 1.556M12.255 16.21h2.438"
    />
  </Svg>
);
export default IconlystLightbulbBroken;
