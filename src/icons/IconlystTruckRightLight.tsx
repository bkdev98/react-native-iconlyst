import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruckRightLight = ({
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
      d="M8.97 17.182a1.917 1.917 0 1 0-3.834 0 1.917 1.917 0 0 0 3.833 0M18.115 17.182a1.917 1.917 0 1 0-3.834 0 1.917 1.917 0 0 0 3.834 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.197 15.266V6.98a2.08 2.08 0 0 0-2.08-2.08H5.049C3.918 4.9 3 5.818 3 6.95v8.155a2.08 2.08 0 0 0 2.08 2.08M8.969 17.183h5.31M18.113 17.183h.808A2.08 2.08 0 0 0 21 15.103V11.66c0-.936-.553-1.784-1.41-2.162l-3.393-1.497M18.598 12.41h2.4"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.484 11.878 1.582-1.578-1.582-1.575M12.067 10.301H7.129"
    />
  </Svg>
);
export default IconlystTruckRightLight;