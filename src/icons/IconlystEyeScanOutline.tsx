import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEyeScanOutline = ({
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
      d="M12.25 17.225c-2.5 0-4.743-1.735-5.99-4.639a.75.75 0 0 1 0-.592c1.248-2.9 3.487-4.638 5.99-4.638s4.744 1.734 5.992 4.638a.75.75 0 0 1 0 .592c-1.248 2.905-3.492 4.638-5.992 4.638M7.77 12.29c1.02 2.157 2.677 3.434 4.48 3.435 1.805 0 3.46-1.278 4.48-3.434-1.02-2.157-2.676-3.435-4.48-3.435s-3.46 1.277-4.48 3.435M8.4 22.04H7.143A4.65 4.65 0 0 1 2.5 17.398v-1.577a.75.75 0 1 1 1.5 0v1.577a3.146 3.146 0 0 0 3.143 3.142H8.4a.75.75 0 1 1 0 1.5M17.357 22.04h-1.289a.75.75 0 1 1 0-1.5h1.29a3.146 3.146 0 0 0 3.142-3.142v-1.577a.75.75 0 1 1 1.5 0v1.577a4.65 4.65 0 0 1-4.643 4.642M21.25 9.51a.75.75 0 0 1-.75-.75V7.182a3.146 3.146 0 0 0-3.143-3.142H16.1a.75.75 0 1 1 0-1.5h1.257A4.65 4.65 0 0 1 22 7.182V8.76a.75.75 0 0 1-.75.75M3.25 9.51a.75.75 0 0 1-.75-.75V7.182A4.65 4.65 0 0 1 7.143 2.54h1.289a.75.75 0 1 1 0 1.5H7.143A3.146 3.146 0 0 0 4 7.182V8.76a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M12.251 13.312a1.01 1.01 0 1 0 0-2.022 1.01 1.01 0 0 0 0 2.022"
    />
  </Svg>
);
export default IconlystEyeScanOutline;
