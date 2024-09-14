import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarCircle2Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2.563c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.754 16.124v-.219a2.235 2.235 0 0 0 2.054-2.22 2.243 2.243 0 0 0-2.24-2.242h-1.076a.8.8 0 0 1 0-1.599h1.283c.293 0 .532.238.532.53v.08c0 .414.336.71.75.71s.75-.376.75-.79c0-1.119-.911-2.03-2.032-2.03h-.021v-.32a.75.75 0 0 0-1.5 0v.344a2.294 2.294 0 0 0-2.061 2.276 2.3 2.3 0 0 0 2.299 2.3h1.076a.741.741 0 0 1 0 1.48h-1.342a.537.537 0 0 1-.533-.54.75.75 0 0 0-1.5 0c0 1.125.912 2.04 2.033 2.04h.028v.2a.75.75 0 0 0 1.5 0"
    />
  </Svg>
);
export default IconlystDollarCircle2Bulk;
