import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchMoneyDollarBroken = ({
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
      d="M13.507 8.869h-2.329a1.254 1.254 0 1 0 0 2.508h1.433a1.254 1.254 0 1 1 0 2.508h-2.33M11.895 13.885v1.053m0-7.129v1.063"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.215 11.417a8.418 8.418 0 1 0 .928-3.846M17.36 17.584 20.785 21"
    />
  </Svg>
);
export default IconlystSearchMoneyDollarBroken;
