import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterEffectLight = ({
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
      d="M10.522 5.63a.623.623 0 0 1 1.13 0l1.918 4.109a.63.63 0 0 0 .302.301l4.109 1.917c.48.225.48.908 0 1.132l-4.11 1.918a.63.63 0 0 0-.3.301l-1.918 4.11a.624.624 0 0 1-1.131 0l-1.918-4.11a.62.62 0 0 0-.301-.301l-4.11-1.918a.625.625 0 0 1 0-1.132l4.11-1.917a.62.62 0 0 0 .301-.301z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.85 16.727v3.971m1.985-1.986h-3.972M18.009 3.3v2.618m1.308-1.309H16.7"
    />
  </Svg>
);
export default IconlystFilterEffectLight;
