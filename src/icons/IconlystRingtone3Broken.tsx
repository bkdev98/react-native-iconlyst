import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtone3Broken = ({
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
      d="M6.566 11.135v1.191c0 .705-.156 1.4-.456 2.038l-.421.895a2.062 2.062 0 0 0 1.866 2.94h9.89a2.063 2.063 0 0 0 1.866-2.94l-.422-.895a4.8 4.8 0 0 1-.455-2.038v-1.192a5.933 5.933 0 0 0-10.879-3.28M9.7 18.2a2.8 2.8 0 0 0 4.79 1.97"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.104 5.414v-.81a1.605 1.605 0 0 0-3.21 0v.81"
    />
  </Svg>
);
export default IconlystRingtone3Broken;
