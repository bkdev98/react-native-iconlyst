import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChoclateBulk = ({
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
      d="M18.874 6.057c-2.311-.131-3.621-.759-3.93-2.899-.089-.619-.591-1.095-1.217-1.095H6.951A3 3 0 0 0 3.953 5.06v13.876a3 3 0 0 0 2.998 3h10.098a3 3 0 0 0 2.999-3V7.28c0-.655-.52-1.187-1.174-1.223"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.962 15.12a.75.75 0 0 1 .75-.75h14.576a.75.75 0 0 1 0 1.5H4.712a.75.75 0 0 1-.75-.75M3.962 9.246a.75.75 0 0 1 .75-.75h14.576a.75.75 0 0 1 0 1.5H4.712a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.001 2.115a.75.75 0 0 1 .75.75v18.301a.75.75 0 0 1-1.5 0v-18.3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChoclateBulk;
