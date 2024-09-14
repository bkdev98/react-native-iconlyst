import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSortingAToZBroken = ({
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
      d="m4.76 14.667 2.91 2.909m0 0 2.909-2.91m-2.91 2.91V5.939M16.727 8.242h-1.182M14.882 9.82 17.31 4l2.428 5.82M19.25 20.001H15.37l.97-1.454M15.371 14.184h3.879L17.772 16.4"
    />
  </Svg>
);
export default IconlystSortingAToZBroken;
