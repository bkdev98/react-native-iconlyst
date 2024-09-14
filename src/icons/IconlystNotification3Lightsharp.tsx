import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotification3Lightsharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.25 3.024a6.19 6.19 0 0 0-6.188 6.188v4.58L4.45 15.427v2.704h15.6v-2.704l-1.612-1.635v-4.58M15.418 18.131v.226a3.167 3.167 0 0 1-6.334 0v-.226"
    />
    <Circle
      cx={16.588}
      cy={5.098}
      r={2.345}
      stroke={props.color}
      strokeWidth={1.5}
    />
  </Svg>
);
export default IconlystNotification3Lightsharp;
