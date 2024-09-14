import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebcamCameraBold = ({
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
      d="M16.626 16.829a.204.204 0 0 0-.285-.07 8.2 8.2 0 0 1-4.34 1.226 8.2 8.2 0 0 1-4.342-1.226.204.204 0 0 0-.285.07L6.23 18.814c-.31.54-.31 1.18.01 1.72.31.53.86.85 1.49.85h8.55c.61 0 1.17-.32 1.48-.85.31-.54.32-1.17.01-1.71z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 6.815a2.87 2.87 0 0 1 2.87 2.87c0 1.59-1.28 2.87-2.87 2.87a2.87 2.87 0 0 1-2.87-2.87c0-1.58 1.29-2.87 2.87-2.87m0 9.94c3.9 0 7.07-3.17 7.07-7.07S15.9 2.615 12 2.615s-7.07 3.17-7.07 7.07 3.17 7.07 7.07 7.07"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 11.055c.76 0 1.37-.61 1.37-1.37 0-.75-.61-1.37-1.37-1.37-.75 0-1.37.62-1.37 1.37 0 .76.62 1.37 1.37 1.37"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebcamCameraBold;
