import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaystation5Ps5TwoTone = ({
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
      d="m3 9.148 3.208.001a1.53 1.53 0 0 1 .008 3.057l-1.848.001a1.37 1.37 0 0 0-1.367 1.37v1.274M8.307 14.829s.419.002 1.047-.002c1.207-.006 1.907-.7 1.922-1.903l.019-1.851c.015-1.204.716-1.896 1.923-1.903l1.047-.002"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.758 14.833 3.004-.002a1.238 1.238 0 0 0 .003-2.479l-2.315-.004a.72.72 0 0 1-.718-.72v-2.46H21"
    />
  </Svg>
);
export default IconlystPlaystation5Ps5TwoTone;
