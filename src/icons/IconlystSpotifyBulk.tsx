import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpotifyBulk = ({
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
      fillRule="evenodd"
      d="M12 2.5c-5.239 0-9.5 4.261-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.023 11.24a.75.75 0 0 0 .408-1.38c-3.174-2.054-7.18-2.505-10.715-1.204a.75.75 0 1 0 .518 1.408 10.61 10.61 0 0 1 9.382 1.055.75.75 0 0 0 .407.12"
    />
    <Path
      fill={props.color}
      d="M15.549 13.69a.748.748 0 0 0 .428-1.367c-2.257-1.564-5.265-1.924-8.048-.963a.749.749 0 1 0 .489 1.418c2.333-.806 4.839-.515 6.704.777.13.091.28.134.427.134M14.535 16.18a.752.752 0 0 0 .399-1.386c-1.902-1.192-4.158-1.439-6.193-.677a.75.75 0 1 0 .525 1.404c1.595-.593 3.37-.397 4.872.544a.75.75 0 0 0 .397.114"
    />
  </Svg>
);
export default IconlystSpotifyBulk;
