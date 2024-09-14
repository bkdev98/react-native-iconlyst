import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFrameTwoTone = ({
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
      d="M11 3H5a1.5 1.5 0 0 0-1.5 1.5v6l.75 1.5v6.75a1.5 1.5 0 0 0 1.5 1.5h6.75L14 21h6a1.5 1.5 0 0 0 1.5-1.5v-6l-.75-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H12.5z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.938 8.438h7.124v7.124H8.938z"
    />
  </Svg>
);
export default IconlystFrameTwoTone;
