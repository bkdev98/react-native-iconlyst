import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaystation5Broken = ({
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
      d="M6.958 9.15a1.53 1.53 0 0 1 .008 3.057H5.118c-.755.002-1.367.614-1.367 1.37v1.274M3.75 9.148h.895M9.057 14.829s.419.002 1.047-.002c1.207-.006 1.907-.7 1.922-1.903M12.045 11.073c.015-1.204.716-1.896 1.924-1.903l1.046-.002M17.508 14.833l3.004-.002a1.238 1.238 0 0 0 .003-2.479l-2.315-.004a.72.72 0 0 1-.718-.72v-2.46h4.268"
    />
  </Svg>
);
export default IconlystPlaystation5Broken;
