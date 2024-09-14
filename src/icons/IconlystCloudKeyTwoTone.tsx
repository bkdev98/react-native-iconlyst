import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudKeyTwoTone = ({
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
      d="M18.564 17.647A4.14 4.14 0 0 0 21 13.873c0-2.596-1.83-4.139-4.103-4.141 0-1.631-1.28-4.898-4.897-4.898S7.103 8.101 7.103 9.732C4.833 9.753 3 11.277 3 13.873c0 1.68 1 3.126 2.436 3.774M11.966 13.56v.013"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.729 21.186v-4.239c.197-.126.385-.265.557-.437a3.299 3.299 0 1 0-3.835.605v.96l.559.558-.851.85.865.865-.554.553a.4.4 0 0 0 0 .567l1.288 1.288a.4.4 0 0 0 .567 0l1.286-1.287a.4.4 0 0 0 .118-.283"
    />
  </Svg>
);
export default IconlystCloudKeyTwoTone;
