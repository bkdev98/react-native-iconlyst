import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDelivery5Outline = ({
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
      d="M6.749 15.88a.75.75 0 0 1 .453-.15h2.996c.414 0 .75.33.75.75a.75.75 0 0 1-.75.75H7.202a.753.753 0 0 1-.453-1.35M6.452 13.64c0-.41.336-.75.75-.75h1.196c.415 0 .75.34.75.75s-.335.75-.75.75H7.202a.753.753 0 0 1-.75-.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.522 14.17c0 .86-.694 1.55-1.548 1.55h-2.062c-.856 0-1.548-.69-1.548-1.55v-2.06c0-.86.693-1.55 1.548-1.55h2.062c.853 0 1.547.69 1.547 1.55zm-1.548.05c.026 0 .047-.02.047-.05v-2.06c0-.03-.02-.05-.047-.05h-2.062a.05.05 0 0 0-.035.014.05.05 0 0 0-.012.025l-.001.005v2.066c0 .03.022.05.048.05z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m2.867 6.6.847-2.11a3.53 3.53 0 0 1 3.283-2.23h10.21a3.54 3.54 0 0 1 3.282 2.22l.848 2.11a7 7 0 0 1 .513 2.65l-.015 7.71c-.002 1.28-.286 2.48-.987 3.37-.724.92-1.814 1.42-3.196 1.42l-11.109-.02c-1.38 0-2.474-.5-3.202-1.43-.706-.89-.995-2.09-.991-3.38l.012-7.69c0-.9.173-1.78.505-2.62M3.88 8.76q-.019.228-.02.46l-.011 7.69v.01c-.003 1.08.244 1.91.669 2.44.403.52 1.035.86 2.028.86l11.109.02c.678 0 1.185-.16 1.564-.42q.261-.182.448-.42c.42-.54.665-1.36.668-2.45l.014-7.71q0-.24-.02-.48zm8.969-1.5h7.139l-.043-.11-.85-2.11a2.04 2.04 0 0 0-1.888-1.28H12.85zm-1.5-3.5H6.997a2.04 2.04 0 0 0-1.89 1.28v.01L4.26 7.16l-.039.1h7.129z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDelivery5Outline;
