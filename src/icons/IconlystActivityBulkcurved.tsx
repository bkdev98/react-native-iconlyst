import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystActivityBulkcurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.62 8.81c-.53.25-1.13.39-1.75.39a4.26 4.26 0 0 1-4.25-4.25c0-.64.14-1.24.4-1.78-1.1-.23-2.38-.34-3.86-.34-7.21 0-9.77 2.55-9.77 9.77s2.56 9.77 9.77 9.77c7.22 0 9.78-2.55 9.78-9.77 0-1.45-.1-2.71-.32-3.79"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m13.59 14.98 2.93-3.78a.751.751 0 1 0-1.19-.92l-2.46 3.18-2.82-2.21a.75.75 0 0 0-.56-.15.7.7 0 0 0-.5.28l-3 3.89c-.25.33-.19.8.14 1.05.14.11.3.16.46.16.22 0 .45-.1.59-.29l2.53-3.29 2.82 2.21c.16.12.36.18.56.15.2-.02.38-.12.5-.28"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.87 7.2c.42 0 .82-.12 1.15-.32.65-.39 1.09-1.11 1.09-1.93 0-1.24-1-2.25-2.24-2.25a2.251 2.251 0 0 0 0 4.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystActivityBulkcurved;
