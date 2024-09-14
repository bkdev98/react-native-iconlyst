import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBackward5sBold = ({
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
      d="M14.059 13.871h-1.881a.75.75 0 0 0 0 1.5h1.88a2.113 2.113 0 0 0 2.113-2.109 2.114 2.114 0 0 0-2.112-2.11h-1.131v-1.08h2.234a.75.75 0 0 0 0-1.5h-2.984a.75.75 0 0 0-.75.75v2.58c0 .413.336.75.75.75h1.88c.338 0 .613.273.613.61a.61.61 0 0 1-.612.61"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.403 3C9.468 3 6.073 5.594 4.87 9.159l-.633-.194a.748.748 0 0 0-.936.943l.794 2.509a.752.752 0 0 0 1.181.361l2.06-1.632a.75.75 0 0 0-.246-1.305L6.304 9.6c1.012-2.954 3.832-5.1 7.1-5.1 4.135 0 7.5 3.364 7.5 7.5s-3.365 7.5-7.5 7.5a7.5 7.5 0 0 1-6.175-3.245.75.75 0 1 0-1.236.851A9 9 0 0 0 13.403 21c4.962 0 9-4.037 9-9s-4.038-9-9-9"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBackward5sBold;
