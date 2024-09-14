import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmail2Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.4 3.4H7.6c-2.955 0-5.1 2.314-5.1 5.5v6.2c0 3.135 2.192 5.5 5.1 5.5h8.8c2.955 0 5.1-2.314 5.1-5.5V8.9c0-3.135-2.193-5.5-5.1-5.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.798 15.756a.753.753 0 0 1-1.059-.062l-2.797-3.147-.173.14a2.96 2.96 0 0 1-1.776.61 2.9 2.9 0 0 1-1.744-.598l-.141-.112-2.856 3.115a.747.747 0 0 1-1.06.046.75.75 0 0 1-.045-1.059l2.787-3.04L6.23 9.485a.75.75 0 0 1 .938-1.172l4 3.2c.512.385 1.148.385 1.682-.014l3.98-3.186a.75.75 0 1 1 .938 1.172l-2.653 2.123 2.745 3.088a.75.75 0 0 1-.062 1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmail2Bulk;
