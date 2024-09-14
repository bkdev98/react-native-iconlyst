import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallMinusBroken = ({
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
      d="M8.885 15.618C.665 7.4 4.221 5.058 4.517 4.69c2.946-2.946 3.403-1.605 5.723.713 2.405 2.406-2.229 3.533 1.55 7.31 3.779 3.779 4.902-.859 7.309 1.545 2.32 2.32 3.653 2.784.715 5.723-.332.265-2.252 3.164-8.596-2.203M21.314 6.645h-4.789"
    />
  </Svg>
);
export default IconlystPhoneCallMinusBroken;
