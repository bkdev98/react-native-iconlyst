import * as React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseHideTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.36 19.645-4.699-.001M3.64 11.986s0 2.98 7.527 2.98c1.766 0 3.117-.165 4.152-.416"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.693 11.987V6.028M3.64 6.104v11.84s0 2.981 7.527 2.981"
    />
    <Ellipse
      cx={11.167}
      cy={6.048}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={7.526}
      ry={2.998}
    />
  </Svg>
);
export default IconlystDatabaseHideTwoTone;