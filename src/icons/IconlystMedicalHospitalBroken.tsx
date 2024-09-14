import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMedicalHospitalBroken = ({
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
      d="m14.847 7.07 2.7-1.559a.95.95 0 0 1 1.3.349l1.895 3.281a.953.953 0 0 1-.349 1.301l-2.699 1.559 2.7 1.558a.953.953 0 0 1 .348 1.3l-1.895 3.282a.95.95 0 0 1-1.3.349l-2.7-1.559v3.116a.95.95 0 0 1-.952.953H9.154m5.693-18h-4.74a.953.953 0 0 0-.953.953V7.07l-2.7-1.559a.953.953 0 0 0-1.3.349L3.258 9.14a.953.953 0 0 0 .35 1.301l2.699 1.559-2.7 1.558a.953.953 0 0 0-.349 1.3l1.896 3.282a.95.95 0 0 0 1.3.349l2.7-1.559"
    />
  </Svg>
);
export default IconlystMedicalHospitalBroken;
