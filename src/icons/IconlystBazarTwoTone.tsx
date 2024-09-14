import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBazarTwoTone = ({
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
      d="M13.704 11.809v2.839a1.91 1.91 0 0 1-1.91 1.912H10.37"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.17 7.57v4.508a1.91 1.91 0 0 0 1.91 1.91h1.921M9.86 6.285v6.36"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.334 9.242v2.84a1.91 1.91 0 0 1-1.91 1.911H3M17.203 17.702v.054m.217-.042a.218.218 0 1 1-.436 0 .218.218 0 0 1 .436 0M13.644 7.558v.053m.216-.042a.218.218 0 1 1-.435 0 .218.218 0 0 1 .435 0"
    />
  </Svg>
);
export default IconlystBazarTwoTone;
