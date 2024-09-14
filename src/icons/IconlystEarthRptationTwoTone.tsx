import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEarthRptationTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.693 6.612a3.818 3.818 0 1 1 4.298 5.014"
      opacity={0.4}
    />
    <Circle
      cx={10.682}
      cy={13.603}
      r={7.567}
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.114 13.516c2.054-.67 1.56 1.051 2.857 1.57 1.392.6 3.406-.13 2.953-1.577-.062-.199-.16-.4-.304-.598-.162-.223-.36-.422-.487-.665a2.7 2.7 0 0 1-.244-.66c-.159-.7.255-1.347.684-1.92.27-.36.517-.741.533-.942.046-.603-.372-1.32-.756-2.22M18.174 12.969c-1.728.563-2.626-1.025-4.106-1.35-1.962-.43-2.284 1.535-.974 2.845 2.237 2.779-2.24 4.082-.647 6.448"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystEarthRptationTwoTone;
