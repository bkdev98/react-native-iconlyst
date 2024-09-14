import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRippleBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.417 17.419a2.285 2.285 0 0 1-2.283-2.282c.054-.54-.28-1.154-.728-1.371-.373-.18-.782-.07-1.182.32a2.24 2.24 0 0 1-1.511.81 2.27 2.27 0 0 1-1.677-.496 2.285 2.285 0 0 1 2.87-3.553c.447.307.865.351 1.195.114.41-.296.6-.982.433-1.564l-.004-.013a2.27 2.27 0 0 1 .283-1.726c.322-.519.825-.88 1.419-1.019a2.29 2.29 0 0 1 2.743 1.701 2.27 2.27 0 0 1-.283 1.725 2.26 2.26 0 0 1-1.418 1.02c-.583.114-.761.565-.738.918.023.367.273.811.9.853 1.239 0 2.263 1.023 2.263 2.281a2.285 2.285 0 0 1-2.282 2.282m1.8-14.919H7.782C4.623 2.5 2.5 4.722 2.5 8.03v7.94c0 3.307 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.223 5.284-5.53V8.03c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRippleBold;
