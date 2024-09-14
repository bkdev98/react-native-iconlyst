import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrophoneTwoTone = ({
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
      d="M12.5 21v-2.848M19.707 10.912a7.224 7.224 0 0 1-7.207 7.24 7.224 7.224 0 0 1-7.207-7.24"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.84 10.882a3.667 3.667 0 0 0 3.66 3.675h.001a3.666 3.666 0 0 0 3.658-3.675V6.66a3.66 3.66 0 0 0-7.32 0z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 6.023v-.01m.56 2.45h-1.12m.56 2.458v-.01"
    />
  </Svg>
);
export default IconlystMicrophoneTwoTone;
