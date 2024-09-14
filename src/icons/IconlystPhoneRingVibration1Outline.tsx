import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneRingVibration1Outline = ({
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
      fill={props.color}
      d="M15.056 21.087h-4.368a4.106 4.106 0 0 1-4.1-4.1V7.013a4.106 4.106 0 0 1 4.1-4.1h4.367a4.106 4.106 0 0 1 4.1 4.1v9.971a4.107 4.107 0 0 1-4.1 4.103M10.688 4.411a2.6 2.6 0 0 0-2.6 2.6v9.972a2.6 2.6 0 0 0 2.6 2.6h4.368a2.605 2.605 0 0 0 2.6-2.6v-9.97a2.6 2.6 0 0 0-2.6-2.6zM21.304 15.296a.75.75 0 0 1-.658-1.11 5.27 5.27 0 0 0 0-4.374.75.75 0 1 1 1.315-.722 6.74 6.74 0 0 1 0 5.818.75.75 0 0 1-.657.388m-16.868 0a.75.75 0 0 1-.655-.387 6.74 6.74 0 0 1 0-5.818.75.75 0 0 1 1.313.726 5.28 5.28 0 0 0 0 4.371.75.75 0 0 1-.66 1.108z"
    />
    <Path fill={props.color} d="M12.871 17.848a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
  </Svg>
);
export default IconlystPhoneRingVibration1Outline;
