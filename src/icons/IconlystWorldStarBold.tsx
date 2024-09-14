import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldStarBold = ({
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
      d="M13.893 11.223C13.757 6.86 12.395 4.11 11.44 4.11s-2.316 2.75-2.452 7.114zM10.94 16.06c0-.76.29-1.46.82-2l.09-.09c.41-.37.91-.61 1.45-.7l.56-.08c.02-.17.02-.36.03-.54h-4.9c.13 4.36 1.5 7.11 2.45 7.11.28 0 .59-.24.9-.69l.08-.43-.62-.59c-.55-.54-.85-1.24-.86-1.99M15.32 11.22h5.09c-.33-4.28-3.68-7.73-7.91-8.23 1.75 1.03 2.71 4.56 2.82 8.23M10.385 2.992a9.016 9.016 0 0 0-7.919 8.232h5.098c.11-3.67 1.071-7.208 2.821-8.232M7.564 12.646H2.465a9.02 9.02 0 0 0 7.92 8.232c-1.75-1.024-2.71-4.563-2.82-8.232"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.723 17.11a1.03 1.03 0 0 0-.312.947l.19 1.084-.98-.513a1.04 1.04 0 0 0-.993-.006l-1.001.524.19-1.09c.06-.34-.05-.689-.305-.943l-.796-.765 1.11-.16c.34-.055.634-.269.788-.578l.498-1.002.5 1.005c.155.31.452.526.796.576l1.103.16zm2.597-1.707a1.06 1.06 0 0 0-.696-.409l-1.773-.256-.792-1.594-.004-.01a1.04 1.04 0 0 0-.466-.46 1.05 1.05 0 0 0-.821-.059 1.05 1.05 0 0 0-.604.53l-.792 1.592-1.787.26a1.12 1.12 0 0 0-.585.297 1.05 1.05 0 0 0-.306.75c.002.282.113.545.319.748L14.3 18.03l-.31 1.763a1.057 1.057 0 0 0 1.537 1.1l1.592-.835 1.603.84c.196.095.414.131.648.095.564-.095.954-.63.866-1.214l-.307-1.748L21.2 16.8a1.04 1.04 0 0 0 .119-1.397"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWorldStarBold;
