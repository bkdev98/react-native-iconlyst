import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoPlaylistBulk = ({
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
      d="M17.24 8.836H6.76c-2.1 0-3.81 1.72-3.81 3.82v5.15c0 2.11 1.71 3.82 3.81 3.82h10.48c2.1 0 3.81-1.71 3.81-3.82v-5.15c0-2.1-1.71-3.82-3.81-3.82"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.182 6.985h11.637a.75.75 0 0 0 0-1.5H6.182a.75.75 0 0 0 0 1.5M8.719 3.875h6.562a.75.75 0 0 0 0-1.5H8.719a.75.75 0 0 0 0 1.5M14.5 16.63h-.01c-.69.63-1.52 1.16-2.41 1.52-.26.1-.51.15-.76.15-.31 0-.6-.08-.85-.24-.45-.26-.73-.72-.8-1.28-.11-1.09-.11-2.13 0-3.11.07-.57.38-1.04.83-1.3.47-.27 1.05-.3 1.59-.07.89.36 1.7.87 2.4 1.51.43.39.66.89.66 1.41s-.23 1.02-.65 1.41m-.85-1.41c0-.09-.06-.2-.17-.3a6.4 6.4 0 0 0-1.96-1.23.5.5 0 0 0-.18-.04.2.2 0 0 0-.09.02c-.06.03-.08.12-.09.18-.1.86-.1 1.79 0 2.76.01.08.04.14.08.17.04.02.14.03.29-.03.71-.28 1.39-.71 1.95-1.23.07-.06.17-.17.17-.3"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoPlaylistBulk;
