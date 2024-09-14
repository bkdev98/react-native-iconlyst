import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneSquare2Broken = ({
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
      d="M16.717 21c2.949 0 4.783-2.081 4.783-5.026V8.026C21.5 5.081 19.666 3 16.718 3H8.283C5.343 3 3.5 5.081 3.5 8.026v7.948C3.5 18.919 5.335 21 8.283 21h5.467"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.598 10.554v.783c0 .464-.103.922-.3 1.341l-.277.589A1.357 1.357 0 0 0 9.248 15.2h6.505a1.357 1.357 0 0 0 1.227-1.934l-.277-.589c-.197-.42-.3-.877-.3-1.34v-.784A3.902 3.902 0 0 0 9.42 8.157M10.658 15.506a1.842 1.842 0 0 0 3.684 0"
    />
  </Svg>
);
export default IconlystRingtoneSquare2Broken;
