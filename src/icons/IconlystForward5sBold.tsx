import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForward5sBold = ({
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
      d="M12.123 13.871h-1.881a.75.75 0 0 0 0 1.5h1.88a2.113 2.113 0 0 0 2.113-2.109 2.114 2.114 0 0 0-2.112-2.11h-1.131v-1.08h2.235a.75.75 0 0 0 0-1.5h-2.985a.75.75 0 0 0-.75.75v2.58c0 .413.336.75.75.75h1.88c.338 0 .613.273.613.61a.61.61 0 0 1-.612.61"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.186 9.153a.75.75 0 0 0-.753-.188l-.633.194C19.597 5.593 16.2 3 12.266 3c-4.962 0-9 4.037-9 9s4.038 9 9 9a9 9 0 0 0 7.41-3.894.75.75 0 1 0-1.236-.851 7.5 7.5 0 0 1-6.174 3.245c-4.136 0-7.5-3.365-7.5-7.5 0-4.136 3.364-7.5 7.5-7.5 3.267 0 6.087 2.145 7.099 5.1l-.784.24a.75.75 0 0 0-.246 1.305l2.059 1.633a.752.752 0 0 0 1.18-.361l.795-2.509a.75.75 0 0 0-.183-.755"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystForward5sBold;
