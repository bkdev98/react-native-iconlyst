import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrophoneCloseRemoveTwoTone = ({
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
      d="M19.706 10.912a7.224 7.224 0 0 1-7.207 7.24 7.223 7.223 0 0 1-7.206-7.24M12.5 21v-2.848"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.158 10.882a3.666 3.666 0 0 1-3.657 3.675H12.5a3.667 3.667 0 0 1-3.66-3.675V6.659A3.66 3.66 0 0 1 12.5 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.739 4.725-2.716 2.717m2.716 0-2.715-2.717"
    />
  </Svg>
);
export default IconlystMicrophoneCloseRemoveTwoTone;
