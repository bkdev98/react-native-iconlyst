import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPalmBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.65 10.962V7.277c0-.91-.76-1.673-1.67-1.673A1.695 1.695 0 0 0 5.3 7.278v4.12M5.3 14.305c0 1.775.71 3.477 1.96 4.732a6.7 6.7 0 0 0 7.34 1.432M16.73 19.04c1.46-1.462 1.85-3.234 1.94-5.095.03-.593.03-2.173.03-3.33a1.35 1.35 0 0 0-1.34-1.334c-1.12 0-2.02.903-2.02 2.016v1.337M15.34 7.469V5.94a1.694 1.694 0 0 0-1.68-1.601c-.87 0-1.61.702-1.66 1.57v4.38M8.65 7.276V4.603C8.69 3.72 9.44 3 10.32 3c.89 0 1.64.718 1.68 1.602v1.309M11.99 15.977c0-1.82 1.54-3.346 3.35-3.344"
    />
  </Svg>
);
export default IconlystPalmBroken;
