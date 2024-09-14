import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinShieldOutline = ({
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
      d="M12.25 21.75a.7.7 0 0 1-.217-.032c-.321-.1-7.856-2.453-7.856-9.048 0-1.838-.024-3.164-.042-4.137-.044-2.431-.053-2.937.583-3.573.753-.754 6.447-2.71 7.532-2.71s6.786 1.957 7.534 2.712c.634.64.625 1.148.58 3.589-.016.971-.04 2.293-.04 4.119 0 6.594-7.536 8.951-7.857 9.048a.7.7 0 0 1-.217.032m0-18a30 30 0 0 0-6.485 2.283c-.16.16-.166.491-.13 2.472.018.98.042 2.315.042 4.165 0 4.912 5.41 7.12 6.573 7.538 1.163-.418 6.574-2.626 6.574-7.538 0-1.838.024-3.168.042-4.146.035-1.995.029-2.328-.148-2.5A30 30 0 0 0 12.25 3.75"
    />
    <Path
      fill={props.color}
      d="M12.602 15.957h-2.309a.75.75 0 0 1-.75-.75V12a.75.75 0 0 1 .75-.75h2.24a2.407 2.407 0 0 1 2.411 2.126 2.35 2.35 0 0 1-2.342 2.581m-1.559-1.5h1.559a.853.853 0 0 0 .849-.939.9.9 0 0 0-.918-.768h-1.49z"
    />
    <Path
      fill={props.color}
      d="M12.602 12.75h-2.309a.75.75 0 0 1-.75-.75V8.793a.75.75 0 0 1 .75-.75h2.24a2.407 2.407 0 0 1 2.411 2.126 2.35 2.35 0 0 1-2.342 2.581m-1.559-1.5h1.559a.853.853 0 0 0 .849-.939.9.9 0 0 0-.918-.768h-1.49zM11.96 16.903a.75.75 0 0 1-.75-.75v-.946a.75.75 0 0 1 1.5 0v.946a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M11.96 9.54a.75.75 0 0 1-.75-.75v-.946a.75.75 0 0 1 1.5 0v.946a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystBitcoinShieldOutline;
