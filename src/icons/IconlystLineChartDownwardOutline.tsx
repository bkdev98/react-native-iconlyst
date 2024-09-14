import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLineChartDownwardOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M4.5 3.369a.75.75 0 0 1 .75.75v14c0 .69.56 1.25 1.25 1.25h14a.75.75 0 1 1 0 1.5h-14a2.75 2.75 0 0 1-2.75-2.75v-14a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.728 12.398a.75.75 0 0 0-.75.75v2.75a.75.75 0 0 0 1.5 0v-2.75a.75.75 0 0 0-.75-.75M15.595 11.39a.75.75 0 0 0-.75.75v3.757a.75.75 0 0 0 1.5 0V12.14a.75.75 0 0 0-.75-.75M12.161 14.13a.75.75 0 0 0-.75.75v1.017a.75.75 0 1 0 1.5 0v-1.016a.75.75 0 0 0-.75-.75M19.129 14.13a.75.75 0 0 0-.75.75v1.017a.75.75 0 1 0 1.5 0v-1.016a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.172 5.416a.75.75 0 0 0-.076 1.058l3.74 4.32a.75.75 0 0 0 .998.123l3.803-2.672 3.378 3.93a.75.75 0 1 0 1.138-.979L16.33 6.752a.75.75 0 0 0-1-.125L11.526 9.3 8.23 5.492a.75.75 0 0 0-1.058-.076"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLineChartDownwardOutline;
