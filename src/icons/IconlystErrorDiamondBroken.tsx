import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystErrorDiamondBroken = ({
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
      d="M15.454 19.627c-1.732 1.731-4.034 1.876-5.767.143L4.73 14.812C3 13.082 3.14 10.777 4.872 9.045l4.672-4.672c1.732-1.731 4.033-1.876 5.766-.143l4.958 4.958c1.734 1.733 1.59 4.035-.142 5.767l-2.336 2.336M12.504 8.4V12m0 3.465v-.062"
    />
  </Svg>
);
export default IconlystErrorDiamondBroken;
