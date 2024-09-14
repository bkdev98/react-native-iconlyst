import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystContacts4Bold = ({
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
      d="m15.563 18.271-6.824.01a.4.4 0 0 1-.397-.397c0-1.442 1.178-2.897 3.81-2.897 2.63 0 3.807 1.45 3.807 2.888a.396.396 0 0 1-.396.396M12.151 8.82a2.58 2.58 0 0 1 2.575 2.576 2.58 2.58 0 0 1-2.575 2.576 2.58 2.58 0 0 1-2.576-2.576 2.58 2.58 0 0 1 2.576-2.576m4.6-4.57v-1c0-.6-.4-1-1-1s-1 .4-1 1v3q0 .6.6.9c-.1.1-.3.1-.4.1-.6 0-1-.4-1-1v-2.1h-4.3v-.9c0-.6-.4-1-1-1s-1 .4-1 1v3q0 .6.6.9c-.1.1-.3.1-.4.1-.6 0-1-.4-1-1v-1.9c-2 .5-3.2 2.1-3.3 4.5v8.1c0 3 1.8 4.8 4.8 4.8h7.6c3 0 4.8-1.8 4.8-4.7v-8.2c-.2-2.6-1.6-4.3-4-4.6"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystContacts4Bold;
