import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystErrorDiamondLight = ({
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
      d="m4.229 14.812 4.958 4.958c1.733 1.733 4.035 1.588 5.767-.143l4.672-4.672c1.731-1.732 1.876-4.034.142-5.767L14.81 4.23c-1.733-1.733-4.034-1.588-5.766.143L4.372 9.045c-1.731 1.732-1.871 4.038-.143 5.767M12.004 8.4V12m0 3.465v-.062"
    />
  </Svg>
);
export default IconlystErrorDiamondLight;
