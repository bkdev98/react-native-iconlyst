import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPearTwoTone = ({
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
      d="M12.004 6.155c-.07-1.529.787-2.941.787-2.941"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.854 6.09c-.651-2.431-1.683-3.027-4.114-2.376.663 2.475 1.847 2.983 4.114 2.376"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.705 9.173C14.613 7.31 13.758 6.155 12 6.155S9.387 7.309 9.295 9.173c0 1.811-1.611 2.898-2.218 3.764-2.593 3.701.498 8.187 4.923 8.06 4.425.127 7.516-4.359 4.923-8.06-.607-.866-2.218-1.953-2.218-3.764"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPearTwoTone;
