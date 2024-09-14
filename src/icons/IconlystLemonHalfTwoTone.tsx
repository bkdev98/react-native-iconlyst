import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLemonHalfTwoTone = ({
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
      d="M18.403 4.174c3.898 3.898 3.898 10.218 0 14.116s-10.218 3.897-14.116 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.72 7.586C3.845 11.459 2.24 16.19 4.151 18.102s6.644.306 10.517-3.567S20.147 5.93 18.236 4.02s-6.644-.306-10.517 3.567"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.194 11.06-7.299 2.317m7.299-2.316L8.877 18.36m2.317-7.3 2.104-7.229m-2.104 7.23 7.3-2.317m-3.825 5.791-6.95-6.95M4.152 18.103 18.236 4.02"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystLemonHalfTwoTone;
