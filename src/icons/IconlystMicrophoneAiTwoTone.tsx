import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrophoneAiTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.774 19.688c-.44-.658-1.344-.828-2.016-.379l-.94.63c-1.04.69-2.431.428-3.116-.585l-.696-1.04M14.9 13.752a5.29 5.29 0 0 0 4.544-1.497 5.325 5.325 0 0 0-4.907-8.965"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.96 17.066 6.401-7.813 4.51 4.51-7.663 6.498c-2.125 1.802-5.014-1.041-3.249-3.195M5.454 9.54l-.096-.258a3.56 3.56 0 0 0-2.1-2.103L3 7.083l.258-.096a3.56 3.56 0 0 0 2.1-2.103l.096-.258.095.258a3.56 3.56 0 0 0 2.1 2.103l.259.096-.258.096a3.56 3.56 0 0 0-2.1 2.103zM11.691 6.573a1.74 1.74 0 0 0-1.155-1.157 1.74 1.74 0 0 0 1.155-1.157c.169.555.602.988 1.155 1.157a1.74 1.74 0 0 0-1.155 1.157"
    />
  </Svg>
);
export default IconlystMicrophoneAiTwoTone;
