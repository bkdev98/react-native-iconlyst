import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHistogramChartLight = ({
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
      d="M21.5 12.12h-18M5.5 12.123V8.425h2.333v3.698M10.167 12.12V5.771H12.5v6.347M14.833 12.123V3.119h2.333v9.004M7.833 12.123v6.343h2.333v-6.343M12.5 12.123v8.996h2.333v-8.996M17.167 12.123v6.343H19.5v-6.343"
    />
  </Svg>
);
export default IconlystHistogramChartLight;
