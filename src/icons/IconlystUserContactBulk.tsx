import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserContactBulk = ({
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
      d="M11.08 4.117a.3.3 0 0 1 .3-.3h1.541a.3.3 0 0 1 .3.3v1.76a.3.3 0 0 1-.3.3h-1.54a.3.3 0 0 1-.3-.3zm4.77.233h-1.2v-.3c0-.9-.7-1.7-1.6-1.7h-1.7c-.9 0-1.7.7-1.7 1.7v.3h-1.2c-2.9 0-4.7 1.7-4.7 4.6v8c0 2.9 1.8 4.7 4.7 4.7h7.4c2.9 0 4.7-1.7 4.7-4.6v-8.1c-.1-2.9-1.8-4.6-4.7-4.6"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m8.612 18.364 7.08-.01a.41.41 0 0 0 .41-.411c0-1.491-1.221-2.996-3.95-2.996S8.2 16.457 8.2 17.953a.413.413 0 0 0 .41.41zM14.715 11.113a2.567 2.567 0 0 0-2.564-2.564 2.566 2.566 0 0 0-2.563 2.564 2.566 2.566 0 0 0 2.563 2.564 2.567 2.567 0 0 0 2.564-2.564"
    />
  </Svg>
);
export default IconlystUserContactBulk;
