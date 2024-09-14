import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanBroken = ({
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
      d="M21.5 12.818h-8.63M8.407 12.816H2.5M20.551 8.646V7.148a3.7 3.7 0 0 0-3.697-3.699h-1.195M3.453 8.646V7.148A3.7 3.7 0 0 1 7.15 3.449h1.224M20.551 12.817v4.037a3.7 3.7 0 0 1-3.697 3.697h-1.195M3.453 12.817v4.037A3.7 3.7 0 0 0 7.15 20.55h1.224"
    />
  </Svg>
);
export default IconlystScanBroken;
