import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHorizontalTopRightOutline = ({
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
      d="M16.88 3.459a.75.75 0 0 0-.021 1.06L19.24 7H3.9a.75.75 0 0 0 0 1.5h15.34l-2.381 2.48a.75.75 0 1 0 1.082 1.04l3.6-3.75a.75.75 0 0 0 0-1.04l-3.6-3.75a.75.75 0 0 0-1.06-.021M7.12 11.959a.75.75 0 0 1 .021 1.06L4.76 15.5h6.34a.75.75 0 0 1 0 1.5H4.76l2.381 2.48a.75.75 0 1 1-1.082 1.04l-3.6-3.75a.75.75 0 0 1 0-1.04l3.6-3.75a.75.75 0 0 1 1.06-.021"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHorizontalTopRightOutline;
