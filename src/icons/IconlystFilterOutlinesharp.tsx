import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.745 7.608h11.142v1.5H8.745z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.5 8.298c0-1.861 1.519-3.361 3.38-3.361 1.862 0 3.38 1.5 3.38 3.36 0 1.862-1.518 3.362-3.38 3.362S3.5 10.16 3.5 8.298m3.38-1.861c-1.043 0-1.88.838-1.88 1.86 0 1.024.837 1.862 1.88 1.862 1.044 0 1.88-.838 1.88-1.861a1.87 1.87 0 0 0-1.88-1.861M15.755 17.22H4.613v1.5h11.142z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21 17.91c0-1.861-1.519-3.361-3.38-3.361-1.862 0-3.38 1.5-3.38 3.361s1.518 3.362 3.38 3.362S21 19.772 21 17.91m-3.38-1.861c1.043 0 1.88.838 1.88 1.861a1.87 1.87 0 0 1-1.88 1.862 1.87 1.87 0 0 1-1.88-1.862c0-1.023.836-1.861 1.88-1.861"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilterOutlinesharp;
