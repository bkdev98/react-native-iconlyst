import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystErrorDiamondTwoTone = ({
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
      d="m4.729 14.812 4.958 4.958c1.733 1.733 4.035 1.588 5.767-.143l4.672-4.672c1.731-1.732 1.876-4.034.142-5.767L15.31 4.23c-1.733-1.733-4.034-1.588-5.766.143L4.872 9.045C3.14 10.777 3 13.083 4.729 14.812"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.504 8.4V12m0 3.465v-.062"
    />
  </Svg>
);
export default IconlystErrorDiamondTwoTone;
