import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartBagLike3Bulk = ({
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
      d="M7.13 5.918c-2.491.065-4.153 1.85-4.153 4.487v6.301c0 2.685 1.725 4.49 4.294 4.49H17.68c2.57 0 4.297-1.805 4.297-4.49v-6.301c0-2.686-1.727-4.489-4.296-4.489h-.566v.002z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.651 12.202c.177-.991.83-1.82 1.81-2.131a2.71 2.71 0 0 1 2.016.142 2.76 2.76 0 0 1 2.006-.143c.983.313 1.639 1.142 1.817 2.133a.32.32 0 0 0 .31.272h5.366v1.5h-5.673a.32.32 0 0 0-.284.187c-.804 1.75-2.924 2.969-3.182 3.11a.756.756 0 0 1-.721.001c-.102-.055-2.357-1.307-3.194-3.112a.32.32 0 0 0-.284-.186h-5.66l-.001-1.5H8.34c.156 0 .284-.12.311-.273m4.272-.514a.75.75 0 0 1-.894 0 1.22 1.22 0 0 0-1.106-.19c-.775.247-.957 1.11-.738 1.798.327 1.01 1.549 1.968 2.29 2.445.746-.482 1.976-1.444 2.293-2.442.218-.69.035-1.553-.735-1.798a1.25 1.25 0 0 0-1.11.187"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M16.587 5.916v-.14a2.974 2.974 0 0 0-2.97-2.971h-2.28a2.974 2.974 0 0 0-2.97 2.97v.14h1.5v-.14c0-.81.659-1.47 1.47-1.47h2.28c.81 0 1.47.66 1.47 1.47v.14z"
    />
  </Svg>
);
export default IconlystHeartBagLike3Bulk;
