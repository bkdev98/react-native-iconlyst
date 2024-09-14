import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartUpwardVerticallLight = ({
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
      d="M4.5 12.117h5v8.001h-5a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1M10.5 8.118h5v12h-6v-11a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.5 4.118h4a1 1 0 0 1 1 1V19.12a1 1 0 0 1-1 1h-5.001v-15a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarChartUpwardVerticallLight;
