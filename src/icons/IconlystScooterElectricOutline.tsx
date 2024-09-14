import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScooterElectricOutline = ({
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
      fillRule="evenodd"
      d="M5.466 15.497a1.466 1.466 0 1 0 0 2.932 1.466 1.466 0 0 0 0-2.932M2.5 16.963a2.966 2.966 0 1 1 5.931 0 2.966 2.966 0 0 1-5.931 0M19.035 15.497a1.466 1.466 0 1 0 0 2.932 1.466 1.466 0 0 0 0-2.932m-2.966 1.466a2.966 2.966 0 1 1 5.931 0 2.966 2.966 0 0 1-5.931 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.986 5.571a.41.41 0 0 0-.39.29l-.001.002-1.748 6.17a5.95 5.95 0 0 1 3.16 4.532l4.316.017h.002c.307 0 .612-.064.902-.183l.003-.001.307-.125a.75.75 0 0 1 .564 1.39l-.304.123-.002.001a3.9 3.9 0 0 1-1.472.295h-.003l-5.02-.02a.75.75 0 0 1-.747-.75 4.445 4.445 0 0 0-2.868-4.157.75.75 0 0 1-.458-.907L8.15 5.456v-.001A1.91 1.91 0 0 1 9.987 4.07h1.585a.75.75 0 1 1 0 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.382 7.348a.75.75 0 0 1 .3 1.017l-.85 1.563h2.337a.75.75 0 0 1 .659 1.108l-1.453 2.668a.75.75 0 1 1-1.317-.718l.849-1.559H11.57a.75.75 0 0 1-.659-1.108l1.453-2.67a.75.75 0 0 1 1.017-.301"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScooterElectricOutline;
