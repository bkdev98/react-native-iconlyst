import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpGraphBroken = ({
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
      d="m3.678 17.463 6.567-7.501 4.213 3.755L18.98 8.94"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 21H8.284C5.343 21 3.5 18.919 3.5 15.973V8.026C3.5 5.08 5.335 3 8.283 3h8.434C19.666 3 21.5 5.08 21.5 8.026v7.947c0 2.946-1.834 5.027-4.782 5.027h-.297"
    />
  </Svg>
);
export default IconlystUpGraphBroken;
