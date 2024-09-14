import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraphBold = ({
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
      d="M13.602 10.775a2.24 2.24 0 0 0-2.237-2.24 2.24 2.24 0 0 0-2.236 2.24 2.236 2.236 0 0 0 4.473 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.071 7.935-.01.01a.747.747 0 0 1-1.06 0 .754.754 0 0 1 1.065-1.066.744.744 0 0 1 .005 1.056m-1.07 7.809-2.5 2.149a.75.75 0 0 1-1.058-.08.75.75 0 0 1 .08-1.057l2.5-2.15a.75.75 0 1 1 .978 1.138m-7.372-4.97a3.74 3.74 0 0 1 3.736-3.738 3.74 3.74 0 0 1 3.737 3.739 3.738 3.738 0 0 1-7.473 0m4.372-8.27c-5.239 0-9.5 4.263-9.5 9.5 0 5.24 4.261 9.5 9.5 9.5 5.237 0 9.5-4.26 9.5-9.5 0-5.237-4.263-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGraphBold;
