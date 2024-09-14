import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPieChartBoxTwoTone = ({
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
      d="M8.283 21.119h8.435c2.948 0 4.782-2.08 4.782-5.027V8.146c0-2.946-1.834-5.027-4.783-5.027H8.283c-2.948 0-4.783 2.08-4.783 5.027v7.946c0 2.946 1.844 5.027 4.783 5.027"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.123 11.259c.025-1.456-1.762-3.8-3.94-3.76a.326.326 0 0 0-.312.313c-.008.754-.006 2.023-.003 2.88a.9.9 0 0 0 .896.898c.917.006 2.317.012 3.078-.007a.335.335 0 0 0 .28-.324"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.129 8.15a4.623 4.623 0 1 0 6.394 6.246"
    />
  </Svg>
);
export default IconlystPieChartBoxTwoTone;
