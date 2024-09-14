import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountDownBroken = ({
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
      d="M3 15.973c0 2.945 1.834 5.026 4.782 5.026h8.433c2.949 0 4.784-2.081 4.784-5.026V12.89M12.831 3h-5.05C4.844 3 3 5.081 3 8.026v3.973M18.522 8.841V3M21 6.354l-2.478 2.488-2.479-2.488M8.615 15.375l4.897-4.896"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.393 15.297v.048m.194-.038a.196.196 0 1 1-.392 0 .196.196 0 0 1 .392 0M8.629 10.535v.048m.195-.037a.196.196 0 1 1-.393 0 .196.196 0 0 1 .393 0"
    />
  </Svg>
);
export default IconlystDiscountDownBroken;
