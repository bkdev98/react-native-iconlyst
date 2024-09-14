import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieReelBold = ({
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
      d="M15.176 12.003c0-.943.766-1.71 1.707-1.71a1.71 1.71 0 0 1 0 3.42 1.71 1.71 0 0 1-1.707-1.71m-2.474-2.48a1.706 1.706 0 0 1-1.708-1.701 1.71 1.71 0 0 1 1.708-1.71 1.705 1.705 0 1 1 0 3.41m0 8.37a1.71 1.71 0 0 1-1.708-1.71c0-.938.766-1.701 1.708-1.701a1.705 1.705 0 1 1 0 3.41m-4.182-4.18a1.71 1.71 0 0 1 0-3.42 1.71 1.71 0 0 1 0 3.42m13.314 6.41h-3.997c2.689-1.707 4.482-4.705 4.482-8.12 0-5.305-4.314-9.62-9.617-9.62s-9.618 4.315-9.618 9.62 4.314 9.619 9.617 9.62h9.133a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMovieReelBold;
