import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimerPlusLight = ({
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
      d="M19.635 12.914a7.48 7.48 0 0 1-7.482 7.481 7.48 7.48 0 0 1-7.481-7.481 7.482 7.482 0 1 1 14.963 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.152 10.36v5.108M14.707 12.914H9.6M6.402 3.615a10.85 10.85 0 0 0-3.244 3.087M21.158 6.702a10.8 10.8 0 0 0-3.254-3.097"
    />
  </Svg>
);
export default IconlystTimerPlusLight;
