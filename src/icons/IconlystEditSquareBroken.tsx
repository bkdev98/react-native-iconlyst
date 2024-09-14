import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditSquareBroken = ({
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
      d="M2.75 16.362c0 3.082 1.92 5.259 5.003 5.259h8.825c3.085 0 5.003-2.177 5.003-5.259v-4.028M11.493 2.789h-3.74c-3.075 0-5.003 2.177-5.003 5.259v4.157"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.828 10.92 7.473-7.472c.931-.93 2.44-.93 3.371 0l1.217 1.217a2.383 2.383 0 0 1 0 3.37l-7.509 7.51a2.17 2.17 0 0 1-1.535.636H8.1l.094-3.78a2.17 2.17 0 0 1 .635-1.48"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.166 4.602 2.282 2.283"
    />
  </Svg>
);
export default IconlystEditSquareBroken;
