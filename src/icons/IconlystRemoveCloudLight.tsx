import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRemoveCloudLight = ({
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
      d="M15.362 17.266H7.104a4.6 4.6 0 0 1-1.665-.335A4.15 4.15 0 0 1 3 13.153c0-2.594 1.836-4.112 4.104-4.136v-.01M3.91 5.813l14.067 14.066M8.729 5.353h.007c.768-.727 1.836-1.232 3.265-1.232 1.811 0 3.035.815 3.802 1.836.776 1.02 1.094 2.244 1.094 3.06C19.165 9.041 21 10.56 21 13.153c0 1.233-.53 2.335-1.379 3.085"
    />
  </Svg>
);
export default IconlystRemoveCloudLight;
