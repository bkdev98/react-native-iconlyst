import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleTagmanagerBroken = ({
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
      d="M20.377 14.954c1.732-1.731 1.876-4.034.143-5.767l-4.958-4.958c-1.728-1.728-4.035-1.588-5.767.143L5.123 9.044c-1.731 1.732-1.876 4.033-.143 5.766l4.958 4.958c1.734 1.734 4.036 1.589 5.767-.142l2.336-2.336m-1.744 1.782-.02-.02"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.296 4.965-7.054 7.054 1.766 1.766"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.774 8.496 3.522 3.523-7.054 7.054"
    />
  </Svg>
);
export default IconlystGoogleTagmanagerBroken;
