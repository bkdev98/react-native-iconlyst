import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPieChartTwoTone = ({
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
      d="M10.344 5.594a7.8 7.8 0 0 0-6.692 9.297c.59 3.038 3.038 5.486 6.076 6.075a7.8 7.8 0 0 0 9.296-6.69.85.85 0 0 0-.841-.947h-6.051a.84.84 0 0 1-.842-.843v-6.05a.85.85 0 0 0-.946-.842"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.494 9.378a7.275 7.275 0 0 0-6.253-6.252.85.85 0 0 0-.956.84v5.528c0 .464.377.84.842.84h5.526c.51 0 .907-.45.84-.956"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPieChartTwoTone;
