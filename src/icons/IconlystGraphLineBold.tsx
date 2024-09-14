import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraphLineBold = ({
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
      d="m17.748 9.978-2.912 3.78a.75.75 0 0 1-1.056.133l-2.729-2.136-2.388 3.076a.75.75 0 0 1-1.186-.92l2.85-3.67a.75.75 0 0 1 1.055-.131l2.727 2.134 2.452-3.182a.75.75 0 0 1 1.187.916M16.717 2.5H8.283C5.123 2.5 3 4.723 3 8.031v7.939c0 3.308 2.123 5.53 5.282 5.53h8.435c3.16 0 5.283-2.222 5.283-5.53V8.031C22 4.723 19.877 2.5 16.717 2.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGraphLineBold;
