import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCeloBold = ({
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
      d="M17.136 14.439v-.005c0-4.173-3.393-7.568-7.566-7.57a5.57 5.57 0 0 1 4.86-2.86A5.576 5.576 0 0 1 20 9.574a5.57 5.57 0 0 1-2.864 4.865m-7.568 5.565A5.576 5.576 0 0 1 4 14.434 5.57 5.57 0 0 1 6.863 9.57v.004c0 4.173 3.394 7.569 7.565 7.57a5.57 5.57 0 0 1-4.86 2.86m0-11.14a5.574 5.574 0 0 1 5.568 5.57c0 .226-.018.448-.044.667a6 6 0 0 1-.662.043 5.575 5.575 0 0 1-5.567-5.57q.002-.338.043-.666c.218-.026.438-.043.662-.043m12.433.71c0-4.174-3.396-7.57-7.57-7.57-3.357 0-6.208 2.2-7.195 5.232C4.201 8.222 2 11.074 2 14.434c0 4.174 3.395 7.57 7.568 7.57 3.357 0 6.207-2.2 7.194-5.231 3.035-.986 5.238-3.84 5.238-7.2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCeloBold;
