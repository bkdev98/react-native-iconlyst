import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeFunOutline = ({
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
      d="M8.283 13.728a.75.75 0 0 1 1.052.137c.73.95 1.779 1.513 2.916 1.513s2.186-.563 2.915-1.513a.75.75 0 1 1 1.19.914c-.979 1.275-2.448 2.1-4.105 2.1s-3.127-.825-4.106-2.1a.75.75 0 0 1 .138-1.052"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M17.466 21.75H7.035a4.077 4.077 0 0 1-4.072-4.073V10.5a3.7 3.7 0 0 1 1.369-2.88l5.573-4.54a3.73 3.73 0 0 1 4.69 0l5.574 4.54a3.7 3.7 0 0 1 1.369 2.88v7.174a4.077 4.077 0 0 1-4.072 4.076m-5.216-18c-.51 0-1.005.176-1.4.5L5.276 8.79a2.2 2.2 0 0 0-.816 1.717v7.173a2.575 2.575 0 0 0 2.572 2.572h10.43a2.575 2.575 0 0 0 2.573-2.572V10.5a2.2 2.2 0 0 0-.816-1.717l-5.57-4.537a2.2 2.2 0 0 0-1.4-.495z"
    />
  </Svg>
);
export default IconlystHomeFunOutline;
