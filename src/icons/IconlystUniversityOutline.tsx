import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUniversityOutline = ({
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
      d="M11.919 2.486a1.48 1.48 0 0 1 1.604 0l8.2 5.294c.42.272.675.739.675 1.242v.575a1.48 1.48 0 0 1-1.48 1.48H4.523a1.48 1.48 0 0 1-1.48-1.48v-.575c0-.503.256-.97.677-1.243zm.802 1.268L4.543 9.033v.543h16.355v-.544z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.72 6.516a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M3.42 18.462a1.26 1.26 0 0 1 1.23-.99h16.14a1.26 1.26 0 0 1 1.232.99l.386 1.755a1.26 1.26 0 0 1-1.23 1.531H4.265a1.26 1.26 0 0 1-1.231-1.53zm1.423.51-.281 1.276h16.317l-.28-1.275zm15.714-.188"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.947 9.574a.75.75 0 0 1 .75.75v7.9a.75.75 0 0 1-1.5 0v-7.9a.75.75 0 0 1 .75-.75m4.514 0a.75.75 0 0 1 .75.75v7.9a.75.75 0 0 1-1.5 0v-7.9a.75.75 0 0 1 .75-.75m4.516 0a.75.75 0 0 1 .75.75v7.9a.75.75 0 0 1-1.5 0v-7.9a.75.75 0 0 1 .75-.75m4.514 0a.75.75 0 0 1 .75.75v7.9a.75.75 0 0 1-1.5 0v-7.9a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUniversityOutline;
