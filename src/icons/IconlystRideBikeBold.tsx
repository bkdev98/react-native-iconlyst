import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRideBikeBold = ({
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
      d="m11.838 12.132-.669-.276a1 1 0 0 1-.602-.702c-.078-.321 0-.65.215-.9a1.02 1.02 0 0 1 1.423-.12l1.024.853c.541.45 1.227.698 1.93.698h2.901a1 1 0 0 0 0-2h-2.9a1.02 1.02 0 0 1-.652-.235l-1.022-.851a3.03 3.03 0 0 0-4.223.353 2.99 2.99 0 0 0-.64 2.673 2.98 2.98 0 0 0 1.786 2.08l.67.277c.511.209.76.779.566 1.297l-.869 2.316a1 1 0 0 0 .936 1.352 1 1 0 0 0 .936-.65l.87-2.316a3 3 0 0 0-1.68-3.85M14.063 7.037a2.334 2.334 0 0 0 2.33-2.331 2.334 2.334 0 0 0-2.33-2.331 2.334 2.334 0 0 0-2.333 2.331 2.334 2.334 0 0 0 2.332 2.331M6.205 20.125a2 2 0 0 1-2-1.998c0-1.102.898-1.999 2-1.999a2 2 0 0 1 1.998 2 2 2 0 0 1-1.998 1.997m0-5.497a3.503 3.503 0 0 0-3.5 3.5 3.503 3.503 0 0 0 3.5 3.497 3.5 3.5 0 0 0 3.498-3.498 3.503 3.503 0 0 0-3.498-3.499"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.796 20.125a2 2 0 0 1-1.999-1.998c0-1.102.897-1.999 2-1.999a2 2 0 0 1 1.997 2 2 2 0 0 1-1.998 1.997m0-5.497a3.503 3.503 0 0 0-3.499 3.5 3.503 3.503 0 0 0 3.5 3.497 3.5 3.5 0 0 0 3.497-3.498 3.503 3.503 0 0 0-3.498-3.499"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRideBikeBold;
