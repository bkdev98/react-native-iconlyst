import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarTemperatureLight = ({
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
      d="M3.371 20.334c.981-.592 2.57-.592 3.552 0 .98.592 2.57.592 3.551 0s2.57-.592 3.552 0c.981.592 2.57.592 3.551 0s2.57-.592 3.552 0M3.371 17.226c.981-.592 2.57-.592 3.552 0M17.577 17.226c.981-.592 2.57-.592 3.552 0M9.88 5.37v4.76a3.93 3.93 0 0 0-1.582 3.145 3.952 3.952 0 0 0 7.904 0 3.93 3.93 0 0 0-1.58-3.144V5.37a2.371 2.371 0 0 0-4.743 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.414 13.275a1.164 1.164 0 1 1-2.329 0 1.164 1.164 0 0 1 2.33 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 6.952v5.158"
    />
  </Svg>
);
export default IconlystCarTemperatureLight;
