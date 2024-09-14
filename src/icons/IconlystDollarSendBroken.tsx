import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarSendBroken = ({
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
      d="M13.811 9.201H11.2a1.406 1.406 0 1 0 0 2.813h1.607a1.406 1.406 0 0 1 0 2.813h-2.612M12.004 14.826v1.182m0-7.994v1.19M20.558 6.398V3.504h-2.893M20.558 3.504 16.652 7.41"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3.063c-4.968 0-9 4.031-9 9a9 9 0 0 0 5.244 8.18M21 12.063c0 4.967-4.032 9-9 9"
    />
  </Svg>
);
export default IconlystDollarSendBroken;
