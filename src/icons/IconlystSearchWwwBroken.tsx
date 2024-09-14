import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchWwwBroken = ({
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
      d="M17.325 6.375a8.058 8.058 0 1 0-12.513 10.16M18.183 15.211A8.06 8.06 0 0 1 7.85 18.835M16.543 17.346l3.279 3.27"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.28 10.16.864 1.974.98-1.693.992 1.693.854-1.974M11.793 10.16l.865 1.974.98-1.693.991 1.693.854-1.974M17.309 10.16l.865 1.974.98-1.693.99 1.693L21 10.16"
    />
  </Svg>
);
export default IconlystSearchWwwBroken;
