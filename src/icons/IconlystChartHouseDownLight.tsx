import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartHouseDownLight = ({
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
      d="M7.284 21.12h10.432a3.32 3.32 0 0 0 3.321-3.323v-7.174c0-.89-.4-1.734-1.091-2.298l-5.575-4.54a2.96 2.96 0 0 0-3.743 0l-5.574 4.54a2.97 2.97 0 0 0-1.092 2.299v7.173a3.32 3.32 0 0 0 3.322 3.322"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.195 16.213 2.273.612.612-2.272"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.47 16.825-2.629-4.568-2.404 1.384-1.515-2.635"
    />
  </Svg>
);
export default IconlystChartHouseDownLight;
