import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldShieldTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.708 20.461a8.744 8.744 0 0 1-8.03-8.721c0-4.82 3.91-8.74 8.74-8.74 4.465 0 8.14 3.346 8.667 7.667"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.655 10.849a20 20 0 0 0-.19-2.147C15.009 5.373 13.817 3 12.417 3 11.027 3 9.826 5.373 9.37 8.702c-.137.946-.209 1.965-.209 3.038s.072 2.1.21 3.047c.318 2.31 1.3 4.538 2.337 5.674M3.678 11.748h8.345"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.996 21.001s3.3-1 3.3-3.754.12-2.667-.146-2.934c-.264-.267-2.721-1.122-3.154-1.122s-2.89.857-3.156 1.122c-.265.265-.145.178-.145 2.934s3.3 3.754 3.3 3.754"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWorldShieldTwoTone;