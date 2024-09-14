import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountDownLight = ({
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
      d="M12.831 3h-5.05C4.844 3 3 5.081 3 8.026v7.947c0 2.945 1.834 5.026 4.782 5.026h8.433c2.949 0 4.784-2.081 4.784-5.026V12.89M18.522 8.841V3M21 6.352 18.522 8.84l-2.479-2.488M8.615 15.374l4.897-4.897"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.393 15.295v.048m.194-.038a.196.196 0 1 1-.392 0 .196.196 0 0 1 .392 0M8.629 10.537v.048m.195-.037a.196.196 0 1 1-.392 0 .196.196 0 0 1 .392 0"
    />
  </Svg>
);
export default IconlystDiscountDownLight;