import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonSleepOutline = ({
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
      fill={props.color}
      d="M12.9 21.305c-4.2 0-7.94-2.82-9.1-6.87-.08-.29.03-.66.27-.85.25-.21.6-.24.89-.09 2.73 1.46 6.16.94 8.36-1.25 2.19-2.19 2.71-5.63 1.26-8.36-.14-.27-.1-.65.08-.89.2-.25.53-.36.84-.27 4.04 1.16 6.86 4.9 6.86 9.1 0 5.22-4.25 9.47-9.47 9.47zm-7.08-5.83c1.35 2.61 4.08 4.33 7.08 4.33 4.39 0 7.97-3.57 7.97-7.97 0-3.01-1.72-5.74-4.33-7.09.88 2.97.09 6.31-2.16 8.56s-5.59 3.04-8.56 2.16z"
    />
    <Path
      fill={props.color}
      d="M10.99 10.096H7.96a.76.76 0 0 1-.67-.41c-.13-.25-.1-.56.07-.79l2.13-2.84H7.96c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.03c.28 0 .54.16.67.41s.1.56-.07.79l-2.13 2.84h1.53c.41 0 .75.34.75.75s-.34.75-.75.75M5.7 6.976H3.62a.76.76 0 0 1-.67-.41c-.13-.25-.1-.56.07-.79l1.18-1.57h-.58c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H5.7c.28 0 .54.16.67.41s.1.56-.07.79l-1.18 1.57h.58c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </Svg>
);
export default IconlystMoonSleepOutline;
