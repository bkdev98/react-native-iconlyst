import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdRefreshLight = ({
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
      d="M14.89 14.306a3.19 3.19 0 0 1 5.299 2.391M19.11 19.087a3.19 3.19 0 0 1-5.299-2.392"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 11.578V8.284c0-2.442-1.52-4.167-3.965-4.167H6.964C4.528 4.117 3 5.842 3 8.284v6.587c0 2.443 1.52 4.168 3.964 4.168h3.327M3 9.412h18"
    />
  </Svg>
);
export default IconlystBankCarrdRefreshLight;
