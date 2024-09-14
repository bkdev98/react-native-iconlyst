import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst31DayReturnGuaranteeBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.747 14.3a1.731 1.731 0 1 0 1.226-2.955l1.736-2.152H9.687M15.812 9.193v5.411M20.394 4.914l.002 2.233-2.22.002"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.394 4.914.002 2.233-2.22.002M5.107 19.087l-.002-2.233 2.22-.002"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.133 7.093a8.92 8.92 0 0 0-9.335-3.863M7.956 4.375A8.9 8.9 0 0 0 3.75 11.52M5.367 16.906a8.92 8.92 0 0 0 9.342 3.862M17.544 19.621a8.9 8.9 0 0 0 4.206-7.144"
    />
  </Svg>
);
export default Iconlyst31DayReturnGuaranteeBroken;
