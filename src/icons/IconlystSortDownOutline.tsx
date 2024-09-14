import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSortDownOutline = ({
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
      d="M18.213 20.467a.75.75 0 0 0 1.047 0l2.763-2.693a.75.75 0 0 0-1.046-1.075l-1.49 1.452V10.79a.75.75 0 1 0-1.5 0v7.362l-1.49-1.451a.75.75 0 1 0-1.047 1.074zM2.752 19.36c0 .414.336.75.75.75h3.917a.75.75 0 0 0 0-1.5H3.502a.75.75 0 0 0-.75.75m-.002-4.586c0 .414.336.75.75.75h7.835a.75.75 0 1 0 0-1.5H3.5a.75.75 0 0 0-.75.75m0-4.586c0 .414.336.75.75.75h11.753a.75.75 0 1 0 0-1.5H3.5a.75.75 0 0 0-.75.75m0-4.587c0 .414.336.75.75.75h15.67a.75.75 0 1 0 0-1.5H3.5a.75.75 0 0 0-.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSortDownOutline;
