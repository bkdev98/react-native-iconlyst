import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTwoWayDirectionBroken = ({
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
      d="M16.468 21c2.94 0 4.782-2.081 4.782-5.026V8.026C21.25 5.081 19.416 3 16.468 3H8.034C5.085 3 3.25 5.081 3.25 8.026v7.948C3.25 18.919 5.085 21 8.033 21h4.638"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.249 16.166V12.45a3.034 3.034 0 0 0-3.034-3.034h-2.15"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.654 7.831 7.066 9.42l1.588 1.588M12.252 16.166V12.45a3.034 3.034 0 0 1 3.034-3.034h2.149"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.847 7.831 1.588 1.588-1.588 1.588"
    />
  </Svg>
);
export default IconlystTwoWayDirectionBroken;
