import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMedicalHospitalOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M8.654 3.953c0-.94.761-1.703 1.702-1.703h3.789c.941 0 1.702.763 1.702 1.703V5.77l1.574-.91a1.703 1.703 0 0 1 2.326.624l1.894 3.281c.47.814.192 1.855-.623 2.326L19.444 12l1.574.908a1.703 1.703 0 0 1 .623 2.325l-1.894 3.282a1.703 1.703 0 0 1-2.325.623l-1.575-.909v1.817c0 .941-.761 1.703-1.702 1.703h-3.789c-.94 0-1.702-.762-1.702-1.703V18.23l-1.574.91a1.703 1.703 0 0 1-2.326-.624L2.86 15.235a1.703 1.703 0 0 1 .624-2.326l1.574-.908-1.574-.91a1.703 1.703 0 0 1-.624-2.324l1.895-3.282a1.703 1.703 0 0 1 2.325-.623l1.575.909zm1.702-.203a.203.203 0 0 0-.202.203V7.07a.75.75 0 0 1-1.125.65l-2.7-1.56a.203.203 0 0 0-.276.074L4.158 9.516a.203.203 0 0 0 .074.277l2.7 1.559a.75.75 0 0 1 0 1.298l-2.7 1.558a.203.203 0 0 0-.074.277l1.895 3.281c.055.096.18.13.277.074l2.699-1.558a.75.75 0 0 1 1.125.649v3.116c0 .113.09.203.202.203h3.789c.112 0 .202-.09.202-.203v-3.116a.75.75 0 0 1 1.126-.65l2.698 1.56a.203.203 0 0 0 .277-.074l1.894-3.282a.203.203 0 0 0-.073-.277l-2.7-1.557a.75.75 0 0 1 0-1.3l2.7-1.558a.203.203 0 0 0 .073-.277l-1.894-3.281a.203.203 0 0 0-.276-.074m0 0-2.7 1.558a.75.75 0 0 1-1.125-.649V3.953a.203.203 0 0 0-.202-.203h-3.789"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMedicalHospitalOutline;
