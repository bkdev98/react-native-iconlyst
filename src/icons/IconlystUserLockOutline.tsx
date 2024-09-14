import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserLockOutline = ({
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
      d="M10.866 13.597a5.45 5.45 0 1 1 0-10.901 5.45 5.45 0 0 1 0 10.901m0-9.4a3.951 3.951 0 1 0 0 7.906 3.951 3.951 0 0 0 0-7.908z"
    />
    <Path
      fill={props.color}
      d="M4.452 20.226a.75.75 0 0 1-.738-.622 9 9 0 0 1-.081-1.65l.005-.422a5.155 5.155 0 0 1 5.149-5.15h4.283q.563.002 1.112.122a.75.75 0 1 1-.322 1.465 3.7 3.7 0 0 0-.79-.086H8.787a3.653 3.653 0 0 0-3.65 3.649l-.004.447a7.6 7.6 0 0 0 .059 1.369.75.75 0 0 1-.74.878M19.126 21.307h-2.62a2.053 2.053 0 0 1-2.052-2.05v-1.472a2.053 2.053 0 0 1 2.051-2.05h2.621a2.053 2.053 0 0 1 2.05 2.05v1.471a2.05 2.05 0 0 1-2.05 2.051m-2.62-4.073a.55.55 0 0 0-.552.551v1.471a.55.55 0 0 0 .551.551h2.621a.55.55 0 0 0 .55-.55v-1.472a.553.553 0 0 0-.55-.55z"
    />
    <Path
      fill={props.color}
      d="M19.379 17.262a.75.75 0 0 1-.75-.75v-.968a.8.8 0 0 0-.826-.8.81.81 0 0 0-.8.8v.962a.75.75 0 0 1-1.5 0v-.975a2.306 2.306 0 0 1 2.284-2.289h.027a2.32 2.32 0 0 1 2.317 2.287v.977a.75.75 0 0 1-.752.756"
    />
  </Svg>
);
export default IconlystUserLockOutline;
