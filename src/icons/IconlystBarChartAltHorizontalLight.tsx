import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartAltHorizontalLight = ({
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
      d="M12.502 4.12v5H4.5v-5a1 1 0 0 1 1-1h6.001a1 1 0 0 1 1 1M16.5 20.119v-5h-12v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.5 14.12v-4a1 1 0 0 0-1-1H4.5v6H19.5a1 1 0 0 0 1-1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarChartAltHorizontalLight;
