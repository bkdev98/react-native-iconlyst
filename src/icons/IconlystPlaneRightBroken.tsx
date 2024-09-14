import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneRightBroken = ({
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
      d="m15.449 16.77 2.49 2.45c.487-.544.987-1.02 1.382-1.572.46-.643.387-1.389.14-2.101a204 204 0 0 0-1.743-4.88c-.153-.41-.083-.656.218-.947.867-.841 1.733-1.686 2.54-2.582.83-.924 1.549-2.571.503-3.617-1.047-1.047-2.694-.327-3.617.503-.897.807-1.741 1.672-2.582 2.54-.291.301-.538.37-.946.217a210 210 0 0 0-4.88-1.742c-.713-.247-1.458-.32-2.102.139-.552.395-1.027.896-1.573 1.381l2.322 2.36M9.945 11.302l-2.229 2.68-2.758-.272L3.5 15.167l3.644 2.188L9.33 21l1.458-1.459-.287-2.772 2.695-2.215"
    />
  </Svg>
);
export default IconlystPlaneRightBroken;
