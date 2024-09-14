import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCompareGitDiffBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.745 9.533v3.913c0 1.073.426 2.101 1.184 2.86l3.199 3.198"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.127 16.133v3.37h-3.37M4.25 6.995a2.539 2.539 0 1 0 1.43-2.284M13.373 7.867v-3.37h3.37M17.712 19.544a2.539 2.539 0 1 1 2.242-1.35"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.756 14.467v-3.913a4.04 4.04 0 0 0-1.185-2.86l-3.198-3.198"
    />
  </Svg>
);
export default IconlystCompareGitDiffBroken;
