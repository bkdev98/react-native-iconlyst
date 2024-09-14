import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScrollListBroken = ({
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
      d="m4.25 8.22 2.835-2.835m0 0L9.92 8.22M7.085 5.385v13.23M4.25 15.78l2.835 2.835m0 0L9.92 15.78M13.767 12.096h1.62m4.863 0h-2.125m-4.358 5.708h6.483M13.767 6.195h6.483"
    />
  </Svg>
);
export default IconlystScrollListBroken;
