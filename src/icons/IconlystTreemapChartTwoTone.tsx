import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreemapChartTwoTone = ({
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
      d="M16.717 21.119H8.282c-2.948 0-4.782-2.08-4.782-5.027V8.146c0-2.946 1.834-5.027 4.783-5.027h8.434c2.948 0 4.783 2.08 4.783 5.027v7.946c0 2.946-1.844 5.027-4.783 5.027"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9.5 9.118h12m-18 3h6m6 2.095h6m-12 2.74h6m0-7.835v12m-2-18v6m4-5.896v5.896m-8-6v18"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTreemapChartTwoTone;
