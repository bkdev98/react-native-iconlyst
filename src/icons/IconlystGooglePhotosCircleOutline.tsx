import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGooglePhotosCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.25 11.305a3.25 3.25 0 0 1 6.5 0V12a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75zm1.5-.054h3.5a1.75 1.75 0 0 0-3.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.47 11.47a.75.75 0 0 1 .53-.22h5a.75.75 0 0 1 .75.75v.697a3.25 3.25 0 0 1-6.5 0V12a.75.75 0 0 1 .22-.53m1.28 1.28a1.75 1.75 0 0 0 3.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.052 14.5a3.25 3.25 0 0 1 3.25-3.25h.697a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-.697a3.25 3.25 0 0 1-3.25-3.25m3.197-1.75a1.75 1.75 0 0 0 0 3.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.25 7a.75.75 0 0 1 .75-.75h.697a3.25 3.25 0 0 1 0 6.5H12a.75.75 0 0 1-.75-.75zm1.5.75v3.5a1.75 1.75 0 0 0 0-3.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGooglePhotosCircleOutline;
