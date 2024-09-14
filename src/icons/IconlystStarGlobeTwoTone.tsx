import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarGlobeTwoTone = ({
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
      d="m15.115 14.276.01.01M11.44 6.883l1.258 2.449 2.45 1.258-2.45 1.259-1.258 2.449-1.258-2.45-2.45-1.258 2.45-1.258z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.644 18.146a7.839 7.839 0 1 0-7.29 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.58 19.417.793-1.238 7.252-.005.797 1.243c.505.79.758 1.184.738 1.51a1 1 0 0 1-.408.745c-.264.193-.732.193-1.67.193H8.92c-.937 0-1.406 0-1.67-.193a1 1 0 0 1-.407-.745c-.02-.326.233-.72.738-1.51"
    />
  </Svg>
);
export default IconlystStarGlobeTwoTone;
