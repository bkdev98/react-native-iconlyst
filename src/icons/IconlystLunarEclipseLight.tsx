import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLunarEclipseLight = ({
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
      d="M12.177 7.339a5.74 5.74 0 1 0 0 9.36"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.425 17.198a2.289 2.289 0 1 0-2.978-3.247M8.32 6.332a2.807 2.807 0 0 0 1.81 3.64M6.232 10.092l.007-.002M15.518 3.355v.93m-3.47-.276.482.842m6.458-.842-.481.842M15.518 20.645v-.93m-3.47.276.482-.842m6.458.841-.481-.841"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.43 6.334a5.685 5.685 0 1 1 0 11.371 5.685 5.685 0 0 1 0-11.37"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLunarEclipseLight;
