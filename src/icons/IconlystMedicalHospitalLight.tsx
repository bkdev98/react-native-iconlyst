import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMedicalHospitalLight = ({
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
      d="M20.742 9.141 18.847 5.86a.95.95 0 0 0-1.3-.349l-2.7 1.559V3.953A.953.953 0 0 0 13.895 3h-3.789a.953.953 0 0 0-.952.953V7.07l-2.7-1.559a.953.953 0 0 0-1.3.349L3.258 9.14a.953.953 0 0 0 .35 1.301l2.699 1.559-2.7 1.558a.953.953 0 0 0-.349 1.3l1.896 3.282a.95.95 0 0 0 1.3.349l2.7-1.559v3.116c0 .527.426.953.952.953h3.789a.95.95 0 0 0 .952-.953v-3.116l2.7 1.559a.95.95 0 0 0 1.3-.349l1.895-3.281a.953.953 0 0 0-.349-1.301L17.694 12l2.7-1.559a.953.953 0 0 0 .348-1.3"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMedicalHospitalLight;
