import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWheelchairBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M16.217 2.5H7.782C4.623 2.5 2.5 4.722 2.5 8.03v7.939c0 3.308 2.123 5.531 5.282 5.531h8.434c3.16 0 5.284-2.223 5.284-5.531V8.03c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.531 15.22a.75.75 0 0 0 .636-1.146l-.734-1.178a1.48 1.48 0 0 0-1.247-.696h-1.425l-.196-1.406 1.403.162a.75.75 0 0 0 .172-1.491l-1.956-.225a1.05 1.05 0 0 0-.886.286 1.05 1.05 0 0 0-.3.889l.333 2.395c.075.508.521.89 1.036.89l1.791-.013.736 1.18a.75.75 0 0 0 .637.352"
    />
    <Path
      fill={props.color}
      d="M11.6 18.136a4.77 4.77 0 0 0 3.69-1.735.75.75 0 1 0-1.152-.961 3.27 3.27 0 0 1-2.725 1.19 3.33 3.33 0 0 1-2.317-1.092 3.32 3.32 0 0 1-.864-2.411 3.35 3.35 0 0 1 2.388-3.048.75.75 0 0 0 .506-.931.746.746 0 0 0-.93-.506 4.845 4.845 0 0 0-3.462 4.412 4.8 4.8 0 0 0 1.251 3.49 4.82 4.82 0 0 0 3.614 1.592M13.663 7.06a1.001 1.001 0 1 0-2.002.003 1.001 1.001 0 0 0 2.002-.002"
    />
  </Svg>
);
export default IconlystWheelchairBulk;
