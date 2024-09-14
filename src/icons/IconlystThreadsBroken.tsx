import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThreadsBroken = ({
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
      d="M15.725 12.05a4.7 4.7 0 0 1 1.63.923c1.918 1.712 1.74 4.643 0 6.423-1.325 1.358-2.935 1.97-5.22 1.987h-.01c-2.569-.018-4.544-.904-5.872-2.633a7.6 7.6 0 0 1-1.025-1.825m10.497-4.875c-1.066-.362-2.275-.433-3.401-.367-2.18.129-3.174 1.374-3.113 2.554.16 3.061 3.89 3.321 5.598 1.092.73-.953.986-2.107.916-3.279m0 0a7 7 0 0 0-.21-1.316M9.21 9.489c1.278-1.586 3.493-2.02 4.954-.975"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.558 9.068c-.315-1.189-.81-2.213-1.484-3.063-1.366-1.722-3.364-2.604-5.939-2.622h-.01c-2.569.018-4.545.904-5.872 2.632-1.18 1.538-1.79 3.679-1.81 6.362v.012"
    />
  </Svg>
);
export default IconlystThreadsBroken;
