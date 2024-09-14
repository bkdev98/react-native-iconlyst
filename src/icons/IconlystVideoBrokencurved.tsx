import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoBrokencurved = ({
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
      d="M21.718 13.858c-.065 1.675-.245 3.116-.527 3.417-.43.467-2.914-.943-4.772-2.39M16.42 10.17c1.838-1.457 4.304-2.867 4.771-2.362.273.293.441 1.47.513 2.902"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.611 19.155c-2.813-.69-3.829-2.636-3.829-6.62 0-5.193 1.725-6.923 6.901-6.923s6.9 1.73 6.9 6.923c0 5.19-1.724 6.923-6.9 6.923"
    />
  </Svg>
);
export default IconlystVideoBrokencurved;
