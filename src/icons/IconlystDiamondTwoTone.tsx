import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamondTwoTone = ({
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
      d="M20.27 9.187c1.733 1.733 1.589 4.035-.143 5.767M15.312 4.229c-1.728-1.728-4.035-1.588-5.767.143M4.874 9.044c-1.732 1.732-1.877 4.033-.144 5.766m4.958 4.958c1.734 1.734 4.036 1.59 5.767-.142"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.27 9.187-4.958-4.958m-5.767.143L4.873 9.044M4.73 14.81l4.959 4.958m5.767-.142 4.672-4.672"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDiamondTwoTone;
