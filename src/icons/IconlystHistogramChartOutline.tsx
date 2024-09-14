import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHistogramChartOutline = ({
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
      d="M22.25 12.12a.75.75 0 0 1-.75.75h-18a.75.75 0 1 1 0-1.5h18a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.75 8.425a.75.75 0 0 1 .75-.75h2.333a.75.75 0 0 1 .75.75v3.698a.75.75 0 1 1-1.5 0V9.175H6.25v2.948a.75.75 0 1 1-1.5 0zM9.417 5.772a.75.75 0 0 1 .75-.75H12.5a.75.75 0 0 1 .75.75v6.347a.75.75 0 1 1-1.5 0V6.522h-.833v5.597a.75.75 0 1 1-1.5 0zM14.303 2.589a.75.75 0 0 1 .53-.22h2.333a.75.75 0 0 1 .75.75v9.004a.75.75 0 1 1-1.5 0V3.869h-.833v8.254a.75.75 0 1 1-1.5 0V3.119a.75.75 0 0 1 .22-.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.083 18.466c0 .415.336.75.75.75h2.333a.75.75 0 0 0 .75-.75v-6.343a.75.75 0 0 0-1.5 0v5.593h-.833v-5.593a.75.75 0 0 0-1.5 0zM11.75 21.12c0 .413.336.75.75.75h2.333a.75.75 0 0 0 .75-.75v-8.997a.75.75 0 0 0-1.5 0v8.246h-.833v-8.246a.75.75 0 0 0-1.5 0zM16.637 18.997c.14.14.331.22.53.22H19.5a.75.75 0 0 0 .75-.75v-6.344a.75.75 0 0 0-1.5 0v5.593h-.833v-5.593a.75.75 0 0 0-1.5 0v6.343c0 .2.079.39.22.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHistogramChartOutline;
