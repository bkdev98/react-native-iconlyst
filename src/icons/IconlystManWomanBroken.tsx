import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystManWomanBroken = ({
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
      d="M6.926 19.111a3.925 3.925 0 1 0-2.445-.853M6.925 11.26V4.89m2.466 2.477L6.924 4.89 4.457 7.367M17.075 5a3.925 3.925 0 1 0 2.643 1.023M17.073 18.867v-6.02m1.963 3.854H15.11"
    />
  </Svg>
);
export default IconlystManWomanBroken;
