import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimerCloseLight = ({
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
      d="M12.153 20.395a7.482 7.482 0 1 0 0-14.963 7.48 7.48 0 0 0-7.481 7.482 7.48 7.48 0 0 0 7.481 7.481M6.402 3.615a10.85 10.85 0 0 0-3.244 3.087M21.158 6.702a10.8 10.8 0 0 0-3.254-3.097M13.935 14.695l-3.562-3.562M13.935 11.133l-3.562 3.562"
    />
  </Svg>
);
export default IconlystTimerCloseLight;
