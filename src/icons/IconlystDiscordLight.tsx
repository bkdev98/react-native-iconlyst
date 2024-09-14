import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscordLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.453 16.916c-.215.33-.752 1.154-1.014 1.447-.13.144-.37.3-.538.28-1.531-.19-2.967-.64-4.154-1.684-.489-.431-.795-.92-.74-1.637a24.1 24.1 0 0 1 1.676-7.18C5.1 7.1 5.846 6.38 6.875 6.026a9 9 0 0 1 1.893-.553c1.135-.194 1.172-.258 1.435.728a13.8 13.8 0 0 1 3.589 0c.262-.986.305-.922 1.44-.728.642.109 1.3.305 1.893.553 1.03.354 1.775 1.075 2.193 2.118a24 24 0 0 1 1.676 7.18c.055.716-.252 1.205-.74 1.636-1.187 1.045-2.624 1.494-4.155 1.684-.169.02-.41-.136-.537-.28-.262-.293-.8-1.116-1.014-1.447"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.146 15.86q4.855 2.892 9.709 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.409 12.001c0 .81-.56 1.466-1.25 1.466s-1.25-.656-1.25-1.466.56-1.466 1.25-1.466 1.25.656 1.25 1.466M16.09 12.001c0 .81-.56 1.466-1.25 1.466s-1.25-.656-1.25-1.466.56-1.466 1.25-1.466 1.25.656 1.25 1.466"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiscordLight;
