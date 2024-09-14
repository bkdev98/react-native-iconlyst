import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsInTheHeart2TwoTone = ({
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
      d="M15.39 18.611a23 23 0 0 1-1.87 1.192s-6.201-3.377-7.649-7.877"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.871 8.954 2.647-.438-.45-2.644M3.477 7.279l2.646-.439-.449-2.644M10.39 9.805 6.123 6.841M18.266 17.4l2.74.007-.838-2.676M21.008 17.406l-3.772-2.755"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.902 4.737a5.03 5.03 0 0 1 2.616.989 5.07 5.07 0 0 1 4.542-.766c2.946.95 4.005 4.157 3.106 6.967"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystArrowsInTheHeart2TwoTone;