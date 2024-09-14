import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRadarChartTwoTone = ({
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
      strokeWidth={1.5}
      d="M12.5 21.119a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.5 3.118v9m0 0v9m0-9h9m-9 0h-9"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.5 16.273a4.154 4.154 0 1 0 0-8.308 4.154 4.154 0 0 0 0 8.308Z"
    />
  </Svg>
);
export default IconlystRadarChartTwoTone;
