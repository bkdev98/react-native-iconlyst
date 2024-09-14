import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscordBroken = ({
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
      d="M10.203 16.916c-.215.33-.752 1.154-1.014 1.447-.13.144-.37.3-.538.28-1.531-.19-2.967-.64-4.154-1.684-.489-.431-.795-.92-.74-1.637a24.1 24.1 0 0 1 1.676-7.18C5.85 7.1 6.596 6.38 7.625 6.026a9 9 0 0 1 1.893-.553c1.135-.194 1.172-.258 1.435.728a13.8 13.8 0 0 1 3.589 0c.262-.986.305-.922 1.44-.728.642.109 1.3.305 1.893.553 1.03.354 1.775 1.075 2.193 2.118M15.298 16.915c.214.331.752 1.154 1.014 1.447.128.144.368.3.538.28 1.53-.19 2.967-.639 4.153-1.684.489-.431.796-.92.74-1.636a24 24 0 0 0-.74-4.37"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.896 15.861q4.855 2.893 9.709 0M11.623 8.299h2.253M8.658 12.509c0 .716.56 1.296 1.25 1.296.691 0 1.25-.58 1.25-1.296s-.559-1.296-1.25-1.296M16.84 12.509c0 .716-.56 1.296-1.25 1.296s-1.25-.58-1.25-1.296.56-1.296 1.25-1.296"
    />
  </Svg>
);
export default IconlystDiscordBroken;
