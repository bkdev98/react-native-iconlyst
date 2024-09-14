import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M16.67 2c3.4 0 5.32 1.93 5.33 5.33v9.34c0 3.4-1.93 5.33-5.33 5.33H7.33C3.93 22 2 20.07 2 16.67V7.33C2 3.93 3.93 2 7.33 2ZM12.5 6.13a.84.84 0 0 0-1.28.79v10.19c.05.43.41.75.83.75.43 0 .79-.32.83-.75V6.92a.82.82 0 0 0-.38-.79M7.83 9.41a.82.82 0 0 0-.88 0 .84.84 0 0 0-.39.79v6.91c.04.43.4.75.83.75s.79-.32.83-.75V10.2a.84.84 0 0 0-.39-.79m9.26 3.63a.84.84 0 0 0-.89 0 .81.81 0 0 0-.38.79v3.28c.04.43.4.75.83.75.42 0 .78-.32.83-.75v-3.28a.83.83 0 0 0-.39-.79"
    />
  </Svg>
);
export default IconlystChartBold;
