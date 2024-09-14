import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocument3DotsOutline = ({
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
      d="M8.213 3.75a3.37 3.37 0 0 0-3.37 3.37v9.76a3.37 3.37 0 0 0 3.37 3.37h8.074a3.37 3.37 0 0 0 3.37-3.37V7.12a3.37 3.37 0 0 0-3.37-3.37zm-4.87 3.37a4.87 4.87 0 0 1 4.87-4.87h8.074a4.87 4.87 0 0 1 4.87 4.87v9.76a4.87 4.87 0 0 1-4.87 4.87H8.213a4.87 4.87 0 0 1-4.87-4.87z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.825 12.263a.75.75 0 0 1 .08 1.057l-.005.007a.75.75 0 1 1-1.139-.976l.006-.007a.75.75 0 0 1 1.058-.081m-2.63 2.712a.75.75 0 0 1 0 1.06l-.006.006a.75.75 0 0 1-1.061-1.06l.006-.006a.75.75 0 0 1 1.06 0m5.176 0a.75.75 0 0 1 0 1.06l-.005.006a.75.75 0 1 1-1.061-1.06l.006-.006a.75.75 0 0 1 1.06 0M15.876 8.208a.75.75 0 0 1-.743.757l-.984.009H9.375a.75.75 0 0 1 0-1.5h4.771l.973-.01a.75.75 0 0 1 .757.744"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocument3DotsOutline;
