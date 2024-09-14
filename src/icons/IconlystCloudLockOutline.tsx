import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudLockOutline = ({
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
      d="M13.992 16.27a.75.75 0 0 1-.75-.75v-1.082a1 1 0 0 0-1-.977h-.013a.993.993 0 0 0-.985.982v1.078a.75.75 0 1 1-1.5 0v-1.09a2.49 2.49 0 0 1 2.467-2.47h.033a2.5 2.5 0 0 1 2.5 2.468v1.092a.75.75 0 0 1-.752.75"
    />
    <Path
      fill={props.color}
      d="M13.708 20.799h-2.93a2.206 2.206 0 0 1-2.2-2.2V16.95a2.206 2.206 0 0 1 2.2-2.2h2.93a2.207 2.207 0 0 1 2.205 2.2v1.645a2.207 2.207 0 0 1-2.205 2.204m-2.93-4.553a.705.705 0 0 0-.7.7v1.645a.705.705 0 0 0 .7.7h2.93a.705.705 0 0 0 .705-.7V16.95a.705.705 0 0 0-.705-.7z"
    />
    <Path
      fill={props.color}
      d="M18.81 17.518a.75.75 0 0 1-.309-1.433 3.4 3.4 0 0 0 1.994-3.09 3.2 3.2 0 0 0-3.35-3.393.75.75 0 0 1-.75-.75 4.146 4.146 0 1 0-8.292 0 .75.75 0 0 1-.744.75A3.22 3.22 0 0 0 4 12.993a3.4 3.4 0 0 0 1.994 3.091.75.75 0 1 1-.617 1.367A4.9 4.9 0 0 1 2.5 12.993a4.654 4.654 0 0 1 4.156-4.845 5.636 5.636 0 0 1 11.187 0A4.633 4.633 0 0 1 22 12.998a4.9 4.9 0 0 1-2.877 4.457.75.75 0 0 1-.313.063"
    />
  </Svg>
);
export default IconlystCloudLockOutline;
