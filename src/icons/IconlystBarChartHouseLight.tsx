import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartHouseLight = ({
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
      d="M7.284 21.12h10.432a3.32 3.32 0 0 0 3.321-3.323v-7.174c0-.89-.4-1.734-1.091-2.298l-5.575-4.54a2.96 2.96 0 0 0-3.743 0l-5.574 4.54a2.97 2.97 0 0 0-1.092 2.299v7.173a3.32 3.32 0 0 0 3.322 3.322M8.94 12.436v4.933m3.591-2.02v2.019m3.533-5.987v5.987"
    />
  </Svg>
);
export default IconlystBarChartHouseLight;
