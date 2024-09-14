import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForward15sBold = ({
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
      fillRule="evenodd"
      d="M13.387 13.831h-1.854a.75.75 0 0 0 0 1.5h1.854a2.094 2.094 0 0 0 2.092-2.09c0-1.153-.94-2.09-2.092-2.09h-1.104v-1.04h2.192a.75.75 0 0 0 0-1.5h-2.942a.75.75 0 0 0-.75.75v2.54c0 .413.336.75.75.75h1.854c.326 0 .592.264.592.59a.59.59 0 0 1-.592.59M8.121 9.361v5.221a.75.75 0 0 0 1.5 0v-5.22a.75.75 0 0 0-1.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.186 9.153a.75.75 0 0 0-.752-.188l-.633.194C19.598 5.593 16.2 3 12.266 3c-4.963 0-9 4.037-9 9s4.037 9 9 9c2.96 0 5.73-1.456 7.409-3.894a.749.749 0 1 0-1.234-.851 7.5 7.5 0 0 1-6.175 3.245c-4.136 0-7.5-3.365-7.5-7.5 0-4.136 3.364-7.5 7.5-7.5 3.268 0 6.088 2.146 7.1 5.1l-.784.24a.752.752 0 0 0-.247 1.305l2.059 1.633a.752.752 0 0 0 1.18-.361l.795-2.509a.75.75 0 0 0-.183-.755"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystForward15sBold;
