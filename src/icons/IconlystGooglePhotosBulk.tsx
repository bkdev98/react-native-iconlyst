import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGooglePhotosBulk = ({
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
      d="M11.996 12.007q.002-.546.004-1.091V2.553c0-.392.18-.572.57-.551 1.93.105 3.393.99 4.304 2.695.674 1.262.753 2.6.279 3.96-.422 1.208-1.208 2.113-2.322 2.729a4.64 4.64 0 0 1-1.995.587c-.281.016-.563.02-.844.03zM11.992 12.003q-.007.539-.012 1.077c0 2.788-.002 5.575.003 8.363.001.309-.153.579-.595.556-.728-.038-1.423-.192-2.069-.522-1.41-.722-2.315-1.862-2.649-3.411-.346-1.601.035-3.048 1.088-4.301.754-.898 1.73-1.448 2.883-1.654.444-.08.903-.072 1.355-.104z"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M11.994 11.997q.546.002 1.09.004h8.364c.392 0 .572.18.55.57-.104 1.93-.99 3.393-2.694 4.304-1.262.674-2.601.753-3.96.279-1.208-.422-2.113-1.208-2.73-2.322a4.64 4.64 0 0 1-.586-1.995c-.016-.281-.021-.563-.03-.844z" />
      <Path d="M11.998 11.993q-.54-.008-1.078-.012c-2.788 0-5.575-.002-8.363.003-.309.001-.579-.153-.556-.595.038-.728.192-1.423.522-2.069.722-1.41 1.862-2.315 3.411-2.649 1.601-.346 3.048.035 4.301 1.088.898.754 1.448 1.73 1.654 2.883.08.444.073.903.105 1.355z" />
    </G>
  </Svg>
);
export default IconlystGooglePhotosBulk;
