import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrophoneMinusLight = ({
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
      d="M15.658 10.882a3.666 3.666 0 0 1-3.657 3.675H12a3.667 3.667 0 0 1-3.66-3.675V6.659A3.66 3.66 0 0 1 12 3M16.928 6.338H13.86"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.206 10.912A7.224 7.224 0 0 1 12 18.152a7.224 7.224 0 0 1-7.207-7.24M12 21v-2.848"
    />
  </Svg>
);
export default IconlystMicrophoneMinusLight;