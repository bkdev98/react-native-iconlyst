import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCommandBulk = ({
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
      d="M14.429 16.428H7.572V7.57h8.857v8.858zm0-2H9.572V9.57h4.857z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M7.571 17.714v-3.285h2v3.285A3.29 3.29 0 0 1 6.285 21 3.29 3.29 0 0 1 3 17.714a3.29 3.29 0 0 1 3.285-3.285h1.286v2H6.285a1.287 1.287 0 0 0 0 2.571c.709 0 1.286-.577 1.286-1.286M6.285 7.571h1.286v2H6.285A3.29 3.29 0 0 1 3 6.285 3.29 3.29 0 0 1 6.285 3a3.29 3.29 0 0 1 3.286 3.285v3.286h-2V6.285C7.571 5.577 6.994 5 6.285 5 5.577 5 5 5.577 5 6.285c0 .709.577 1.286 1.285 1.286M16.429 17.714v-3.285h-2v3.285A3.29 3.29 0 0 0 17.715 21 3.29 3.29 0 0 0 21 17.714a3.29 3.29 0 0 0-3.285-3.285h-1.286v2h1.286a1.287 1.287 0 0 1 0 2.571 1.29 1.29 0 0 1-1.286-1.286M17.715 7.571h-1.286v2h1.286A3.29 3.29 0 0 0 21 6.285 3.29 3.29 0 0 0 17.715 3a3.29 3.29 0 0 0-3.286 3.285v3.286h2V6.285c0-.708.577-1.285 1.286-1.285C18.423 5 19 5.577 19 6.285c0 .709-.577 1.286-1.285 1.286"
    />
  </Svg>
);
export default IconlystCommandBulk;
