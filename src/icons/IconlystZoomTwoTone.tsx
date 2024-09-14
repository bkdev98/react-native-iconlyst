import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZoomTwoTone = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 15.676v4.575m0-4.575-2.098 2.106m2.098-2.106 2.096 2.106M12.5 8.825V4.25m0 4.575 2.098-2.106m-2.097 2.106L10.404 6.72"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.075 12.25H4.5m4.575 0L6.97 10.151m2.105 2.098L6.97 14.346M15.926 12.253H20.5m-4.575 0 2.106 2.097m-2.106-2.097 2.106-2.097"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystZoomTwoTone;
