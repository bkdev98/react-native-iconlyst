import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpRightMDOutline = ({
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
      d="M8.25 7A.75.75 0 0 1 9 6.25h8a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8.81l-8.72 8.72a.75.75 0 0 1-1.06-1.06l8.72-8.72H9A.75.75 0 0 1 8.25 7"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowUpRightMDOutline;
