import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPieChartOutline = ({
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
      d="M11.459 4.78c-1.83 0-3.498.68-4.769 1.803a7.2 7.2 0 0 0-2.44 5.406 7.2 7.2 0 0 0 3.035 5.878 7.17 7.17 0 0 0 4.174 1.33c.614 0 1.21-.076 1.778-.22l-2.233-6.055a1.25 1.25 0 0 1 1.173-1.683h6.452a7.21 7.21 0 0 0-7.17-6.459m-5.762.678a8.71 8.71 0 0 1 14.453 5.984c.046.738-.555 1.297-1.233 1.297h-6.382l2.21 5.99c.233.635-.081 1.394-.791 1.606a8.7 8.7 0 0 1-2.495.363 8.67 8.67 0 0 1-5.044-1.608 8.7 8.7 0 0 1-3.665-7.101 8.7 8.7 0 0 1 2.947-6.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.414 15.05a1.25 1.25 0 0 1 1.173-1.683h5.43c.675 0 1.285.558 1.23 1.306a7.4 7.4 0 0 1-4.302 6.175c-.683.312-1.418-.069-1.652-.701zm1.53-.183 1.654 4.481a5.9 5.9 0 0 0 3.122-4.48zM5.696 5.46a.75.75 0 0 1 1.06.063l5.448 6.149a.75.75 0 0 1-1.122.995l-5.45-6.149a.75.75 0 0 1 .064-1.059"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPieChartOutline;
