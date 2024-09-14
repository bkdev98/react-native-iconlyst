import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCheckmarkBulk = ({
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
      d="M19.707 6.48a1 1 0 0 1 0 1.415l-9.625 9.625a1 1 0 0 1-1.414-1.415l9.625-9.625a1 1 0 0 1 1.414 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.293 11.73a1 1 0 0 1 1.414 0l4.375 4.375a1 1 0 0 1-1.414 1.415l-4.375-4.375a1 1 0 0 1 0-1.415"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCheckmarkBulk;
