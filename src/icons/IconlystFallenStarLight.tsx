import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFallenStarLight = ({
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
      d="m16.13 8.034 1.72-1.718M12.67 4.092 11.14 5.62m-2.05 2.052-.873.873M20.07 11.498l-.813.814M17.4 14.17l-1.494 1.493M3.682 20.484a9.81 9.81 0 0 0-.017-9.234 9.81 9.81 0 0 0 9.234.017 9.81 9.81 0 0 0 .016 9.233 9.81 9.81 0 0 0-9.233-.016"
    />
  </Svg>
);
export default IconlystFallenStarLight;
