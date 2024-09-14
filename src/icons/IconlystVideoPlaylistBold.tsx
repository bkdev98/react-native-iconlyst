import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoPlaylistBold = ({
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
      d="M13.48 14.92c.11.1.17.21.17.3 0 .13-.1.24-.17.3-.56.52-1.24.95-1.95 1.23-.15.06-.25.05-.29.03-.04-.03-.07-.09-.08-.17-.1-.97-.1-1.9 0-2.76.01-.06.03-.15.09-.18a.2.2 0 0 1 .09-.02c.05 0 .11.01.18.04.73.29 1.39.71 1.96 1.23"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.5 16.63h-.01c-.69.63-1.52 1.16-2.41 1.52-.26.1-.51.15-.76.15-.31 0-.6-.08-.85-.24-.45-.26-.73-.72-.8-1.28-.11-1.09-.11-2.13 0-3.11.07-.57.38-1.04.83-1.3.47-.27 1.05-.3 1.59-.07.89.36 1.7.87 2.4 1.51.43.39.66.89.66 1.41s-.23 1.02-.65 1.41m2.74-7.8H6.76c-2.1 0-3.81 1.72-3.81 3.82v5.15c0 2.11 1.71 3.82 3.81 3.82h10.48c2.1 0 3.81-1.71 3.81-3.82v-5.15c0-2.1-1.71-3.82-3.81-3.82M6.18 6.985h11.638a.75.75 0 0 0 0-1.5H6.18a.75.75 0 0 0 0 1.5M8.718 3.875h6.562a.75.75 0 0 0 0-1.5H8.718a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoPlaylistBold;
