import * as React from 'react';
import Svg, { Ellipse, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBubbleChartLight = ({
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
    <Ellipse
      cx={19.599}
      cy={5.799}
      stroke={props.color}
      strokeWidth={1.5}
      rx={1.901}
      ry={1.904}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19.599 10.402v.01M19.599 13.712v.01M19.599 17.023v.01M19.599 20.332v.01"
    />
    <Ellipse
      cx={12.5}
      cy={9.109}
      stroke={props.color}
      strokeWidth={1.5}
      rx={1.901}
      ry={1.904}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12.5 13.712v.01M12.5 17.023v.01M12.5 20.332v.01"
    />
    <Ellipse
      cx={5.401}
      cy={12.418}
      stroke={props.color}
      strokeWidth={1.5}
      rx={1.901}
      ry={1.904}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5.401 17.023v.01M5.401 20.332v.01"
    />
  </Svg>
);
export default IconlystBubbleChartLight;
