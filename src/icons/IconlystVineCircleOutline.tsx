import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVineCircleOutline = ({
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
      d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M16.54 13.599c-.69 0-1.48-.07-1.95-.23-1.59-.46-2.36-1.43-2.72-2.16-.51-1.04-.45-2.06-.21-2.66.38-.99 1.15-1.64 2.09-1.77.91-.13 1.82.25 2.37.99.65.87.71 2.07.17 3.29-.17.38-.61.55-.99.38s-.55-.61-.38-.99c.32-.72.32-1.36 0-1.78-.23-.31-.6-.46-.97-.41-.4.06-.72.35-.9.83-.12.31-.12.89.16 1.46.32.66.96 1.14 1.83 1.39.32.11 1.16.19 1.9.15.44-.02.77.29.79.71a.75.75 0 0 1-.71.79c-.15 0-.31.01-.48.01"
    />
    <Path
      fill={props.color}
      d="M11.58 17.25c-.48 0-.96-.19-1.33-.55-2.28-2.26-3.01-6.47-3.01-8.15 0-.41.34-.75.75-.75s.75.34.75.75c0 1.42.65 5.18 2.57 7.09.16.16.39.16.55 0 .84-.79 1.72-2.04 2.3-3.28.18-.37.62-.54 1-.36s.54.62.36 1c-.67 1.42-1.65 2.82-2.63 3.74-.37.35-.83.52-1.3.52z"
    />
  </Svg>
);
export default IconlystVineCircleOutline;
