import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUp2Boldcurved = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M5.249 16.5a.998.998 0 0 1-.859-1.509C5.129 13.74 8.984 7.5 12.25 7.5s7.12 6.24 7.86 7.49a.998.998 0 1 1-1.72 1.019c-1.555-2.625-4.58-6.51-6.14-6.51-1.563 0-4.587 3.885-6.14 6.51a1 1 0 0 1-.861.49"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowUp2Boldcurved;
