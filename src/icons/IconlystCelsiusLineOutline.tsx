import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCelsiusLineOutline = ({
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
      d="M6.768 5.68a1.404 1.404 0 1 0 0 2.808 1.404 1.404 0 0 0 0-2.807M3.864 7.086a2.904 2.904 0 1 1 5.808-.001 2.904 2.904 0 0 1-5.808 0M11.582 10.004a4.891 4.891 0 1 1 9.783 0 .75.75 0 0 1-1.5 0 3.391 3.391 0 1 0-6.783 0v4.924a3.391 3.391 0 1 0 6.783 0 .75.75 0 0 1 1.5 0 4.892 4.892 0 0 1-9.783 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCelsiusLineOutline;
