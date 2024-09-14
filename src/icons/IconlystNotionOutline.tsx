import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotionOutline = ({
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
      d="M8.285 7.363c-.629 0-1.14.51-1.14 1.14v10.18c0 .629.511 1.14 1.14 1.14H19.11c.63 0 1.14-.511 1.14-1.14V8.503c0-.63-.51-1.14-1.14-1.14zm-2.64 1.14a2.64 2.64 0 0 1 2.64-2.64H19.11a2.64 2.64 0 0 1 2.64 2.64v10.18a2.64 2.64 0 0 1-2.64 2.64H8.285a2.64 2.64 0 0 1-2.64-2.64z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.216 3.659a.75.75 0 0 1 1.06-.02l3.148 3.038a.75.75 0 1 1-1.041 1.08L3.235 4.718a.75.75 0 0 1-.019-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 6.005a3.33 3.33 0 0 1 3.328-3.33H16.09c1.128 0 2.212.44 3.023 1.225l1.624 1.57v.001a3.33 3.33 0 0 1 1.014 2.391v10.132a.75.75 0 0 1-1.5 0V7.862c0-.495-.201-.969-.557-1.313L18.07 4.978a2.85 2.85 0 0 0-1.98-.802H5.58a1.83 1.83 0 0 0-1.829 1.83v9.699c0 .77.313 1.509.867 2.045l1.61 1.558c.34.33.797.514 1.272.514h10.922a.75.75 0 0 1 0 1.5H7.5a3.33 3.33 0 0 1-2.315-.936l-1.61-1.558a4.34 4.34 0 0 1-1.324-3.123z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.312 9.793a.75.75 0 0 1 .75.75v6.379a.75.75 0 0 1-1.5 0v-6.379a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.084 9.516a.75.75 0 0 1 .75.75v6.24a.922.922 0 0 1-1.694.5l-.003-.004-3.927-6.081a.75.75 0 0 1 1.26-.814l2.864 4.434v-4.275a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.589 10.469a.75.75 0 0 1-.706.792l-1.143.066a.75.75 0 1 1-.087-1.498l1.144-.066a.75.75 0 0 1 .791.706M17.448 10.183a.75.75 0 0 1-.705.792l-1.231.072a.75.75 0 1 1-.088-1.497l1.232-.072a.75.75 0 0 1 .792.705M12.58 16.833a.75.75 0 0 1-.7.798l-1.134.075a.75.75 0 0 1-.1-1.497l1.135-.075a.75.75 0 0 1 .798.7"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNotionOutline;
