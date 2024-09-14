import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimerTickBroken = ({
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
      d="M6.744 3.615A10.85 10.85 0 0 0 3.5 6.702M21.5 6.702a10.8 10.8 0 0 0-3.254-3.097M10.18 12.701l1.808 1.81 3.724-3.726"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.018 12.89A7.48 7.48 0 0 1 12.5 5.408a7.482 7.482 0 1 1-6.626 10.96"
    />
  </Svg>
);
export default IconlystTimerTickBroken;
