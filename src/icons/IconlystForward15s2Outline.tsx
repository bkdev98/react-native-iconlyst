import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForward15s2Outline = ({
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
      fillRule="evenodd"
      d="M4.802 5.608c-.6.646-.968 1.595-.968 2.779v7.226c0 1.184.367 2.132.968 2.778.596.64 1.477 1.042 2.632 1.042h7.668c1.155 0 2.035-.403 2.63-1.042.602-.645.969-1.594.969-2.778a.75.75 0 0 1 1.5 0c0 1.494-.467 2.83-1.37 3.8-.91.976-2.203 1.52-3.729 1.52H7.434c-1.526 0-2.82-.544-3.73-1.52-.903-.97-1.37-2.306-1.37-3.8V8.387c0-1.494.467-2.83 1.37-3.8.91-.977 2.204-1.52 3.73-1.52h7.668c1.523 0 2.816.543 3.725 1.519.904.97 1.374 2.306 1.374 3.8v3.73a.75.75 0 1 1-1.5 0v-3.73c0-1.183-.369-2.131-.97-2.777-.598-.64-1.478-1.043-2.629-1.043H7.433c-1.155 0-2.035.403-2.63 1.042"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.614 9.935a.75.75 0 0 1 0 1.06l-1.652 1.652a.75.75 0 0 1-1.06 0l-1.643-1.642a.75.75 0 1 1 1.06-1.06l1.113 1.111 1.121-1.121a.75.75 0 0 1 1.06 0M9.943 9.441a.75.75 0 0 1 .75-.75h2.88a.75.75 0 0 1 0 1.5h-2.13v.987h1.065a2.064 2.064 0 1 1 0 4.128h-1.815a.75.75 0 1 1 0-1.5h1.815a.564.564 0 1 0 0-1.128h-1.815a.75.75 0 0 1-.75-.75zM8.086 8.691a.75.75 0 0 1 .75.75v5.115a.75.75 0 0 1-1.5 0V9.441a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystForward15s2Outline;
