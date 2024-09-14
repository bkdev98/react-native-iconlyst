import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAntenaTransformOutline = ({
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
      d="M18.62 4.075c.694-.693 1.88-.201 1.88.779v14.294a1.1 1.1 0 0 1-1.1 1.1H5.103c-.981 0-1.471-1.185-.778-1.878l1.465-1.465a.75.75 0 1 0-1.061-1.06L3.265 17.31c-1.639 1.638-.477 4.439 1.84 4.439h14.294a2.6 2.6 0 0 0 2.6-2.6V4.853c0-2.317-2.8-3.477-4.439-1.84L16.315 4.26a.75.75 0 1 0 1.06 1.06z"
    />
    <Path
      fill={props.color}
      d="M8.202 13.742a.75.75 0 0 1-.148-.448v-3.98l-.32.308a.75.75 0 1 1-1.041-1.08L8.282 7.01a.75.75 0 0 1 1.073.03l1.557 1.502a.75.75 0 0 1-1.041 1.08l-.317-.305v3.977a.75.75 0 0 1-1.352.447M14.292 8.005a.75.75 0 0 0-1.5 0v3.98l-.318-.307a.75.75 0 1 0-1.042 1.08l1.59 1.532c.29.28.75.28 1.04 0l1.59-1.532a.75.75 0 1 0-1.042-1.08l-.318.307z"
    />
  </Svg>
);
export default IconlystAntenaTransformOutline;
