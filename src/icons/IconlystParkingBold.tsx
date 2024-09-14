import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystParkingBold = ({
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
      d="M13.168 11.669h-2.592V8.792h2.592a1.439 1.439 0 1 1 0 2.877"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.924 4.068c.932-1 2.266-1.568 3.86-1.568h8.434c1.597 0 2.93.567 3.862 1.568.928.997 1.42 2.383 1.42 3.958v7.948c0 1.575-.492 2.961-1.42 3.958-.931 1-2.265 1.568-3.863 1.568H7.783c-1.597 0-2.931-.567-3.863-1.568-.928-.997-1.42-2.383-1.42-3.958V8.026c0-1.576.495-2.962 1.424-3.958m5.902 3.224a.75.75 0 0 0-.75.75v7.917a.75.75 0 0 0 1.5 0v-2.79h2.592a2.939 2.939 0 1 0 0-5.877z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystParkingBold;
