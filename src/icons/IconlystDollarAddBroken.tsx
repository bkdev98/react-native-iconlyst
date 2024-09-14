import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarAddBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3.063c-4.968 0-9 4.031-9 9a9 9 0 0 0 5.244 8.18M21 12.063c0 4.967-4.032 9-9 9M18.606 5.456l2.365.001m-2.365 0-2.366-.002m2.366.001v2.365m0-2.365V3.09"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.813 9.201h-2.611a1.406 1.406 0 1 0 0 2.813h1.607a1.406 1.406 0 0 1 0 2.813h-2.612M12.004 14.826v1.182m0-7.994v1.19"
    />
  </Svg>
);
export default IconlystDollarAddBroken;
