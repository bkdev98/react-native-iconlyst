import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartInformationLight = ({
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
      d="M10.718 3.119H8.283c-2.94 0-4.783 2.08-4.783 5.026v7.947c0 2.946 1.835 5.027 4.783 5.027h8.434c2.949 0 4.783-2.081 4.783-5.027v-1.947"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.072 17.24 2.627-2.785 3.816 2.528 2.576-2.528M10.173 10.843V8.359M7.17 10.843V6.897M21.5 7.135a4.016 4.016 0 1 0-8.032 0 4.016 4.016 0 0 0 8.032 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.346 3.12v3.706c0 .246.2.446.446.446h3.705"
    />
  </Svg>
);
export default IconlystChartInformationLight;
