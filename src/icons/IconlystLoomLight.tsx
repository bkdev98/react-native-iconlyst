import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoomLight = ({
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
    <Circle
      cx={11.987}
      cy={12}
      r={3.758}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 8.242V3M12 21v-5.242M15.758 12H21M3 12h5.242M13.879 8.747l2.621-4.54M7.5 19.794l2.621-4.54M15.254 13.879l4.54 2.621M4.205 7.5l4.54 2.621M15.254 10.121l4.54-2.621M4.205 16.5l4.54-2.621M13.879 15.253l2.621 4.54M7.5 4.206l2.621 4.54"
    />
  </Svg>
);
export default IconlystLoomLight;
