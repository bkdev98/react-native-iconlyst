import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareTouchIdLockOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M12.57 22.469H8.09c-3.273 0-5.47-2.3-5.47-5.709V8.918c0-3.415 2.2-5.709 5.47-5.709h8.321c3.272 0 5.47 2.294 5.47 5.709v4a.75.75 0 1 1-1.5 0v-4c0-2.557-1.559-4.209-3.97-4.209H8.09c-2.41 0-3.969 1.652-3.969 4.209v7.841c0 2.556 1.558 4.209 3.97 4.209h4.48a.75.75 0 1 1 0 1.5z"
    />
    <Path
      fill={props.color}
      d="M8.319 11.43a.748.748 0 0 1-.651-1.12 5.275 5.275 0 0 1 6.612-2.262.751.751 0 0 1-.58 1.384 3.776 3.776 0 0 0-4.727 1.618.75.75 0 0 1-.654.38M16.708 12.947a.75.75 0 0 1-.739-.632 3.75 3.75 0 0 0-.642-1.576.75.75 0 0 1 1.227-.864 5.3 5.3 0 0 1 .9 2.2.75.75 0 0 1-.746.872"
    />
    <Path
      fill={props.color}
      d="M13.992 15.498a.75.75 0 0 1-.75-.75v-1.673a1.03 1.03 0 0 0-2.06 0v.477a.75.75 0 0 1-1.5 0v-.477a2.53 2.53 0 0 1 5.06 0v1.673a.75.75 0 0 1-.75.75M7.733 17.017a.75.75 0 0 1-.75-.75v-2.8a.75.75 0 1 1 1.5 0v2.8a.75.75 0 0 1-.75.75M10.433 18.04a.75.75 0 0 1-.75-.75v-1.6a.75.75 0 1 1 1.5 0v1.6a.75.75 0 0 1-.75.75M19.402 22.71h-2.6a2.044 2.044 0 0 1-2.041-2.042v-1.461a2.044 2.044 0 0 1 2.04-2.041h2.6a2.044 2.044 0 0 1 2.043 2.041v1.461a2.044 2.044 0 0 1-2.042 2.042m-2.6-4.044a.54.54 0 0 0-.541.541v1.461a.54.54 0 0 0 .54.542h2.6a.54.54 0 0 0 .543-.542v-1.461a.54.54 0 0 0-.542-.541z"
    />
    <Path
      fill={props.color}
      d="M19.658 18.693a.75.75 0 0 1-.75-.75v-.928a.8.8 0 0 0-.243-.556.8.8 0 0 0-1.365.564v.92a.75.75 0 1 1-1.5 0v-.934a2.304 2.304 0 0 1 4.608 0v.937a.75.75 0 0 1-.75.747"
    />
  </Svg>
);
export default IconlystSquareTouchIdLockOutline;
