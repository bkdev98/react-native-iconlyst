import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMedicalHospitalTwoTone = ({
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
      d="m15.758 7.07 2.698-1.56a.953.953 0 0 1 1.301.349l1.895 3.282a.953.953 0 0 1-.349 1.3l-2.699 1.56m-8.54-4.932-2.7-1.559a.953.953 0 0 0-1.3.349L4.168 9.14a.953.953 0 0 0 .35 1.3l2.699 1.56m2.847 4.93v3.116c0 .526.426.952.952.952h3.789a.95.95 0 0 0 .953-.952V16.93"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.758 7.07V3.953A.953.953 0 0 0 14.805 3h-3.789a.953.953 0 0 0-.952.953V7.07M7.217 12l-2.7 1.558a.953.953 0 0 0-.349 1.3l1.896 3.282a.95.95 0 0 0 1.3.349l2.7-1.559m5.694 0 2.698 1.559a.953.953 0 0 0 1.301-.349l1.895-3.281a.953.953 0 0 0-.349-1.301L18.605 12"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMedicalHospitalTwoTone;
