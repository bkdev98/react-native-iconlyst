import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransactionsUpBulk = ({
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
      d="M21.5 12c0 5.24-4.26 9.5-9.5 9.5-3.82 0-7.12-2.26-8.63-5.52A9.59 9.59 0 0 1 2.5 12c0-5.24 4.26-9.5 9.5-9.5s9.5 4.26 9.5 9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.637 15.51H8.366a.75.75 0 1 0 0 1.5h6.27a.75.75 0 0 0 0-1.5M16.637 12.51h-2.481a.75.75 0 1 0 0 1.5h2.48a.75.75 0 0 0 0-1.5M15.8 10.27c0 .41-.34.75-.75.75-.42 0-.75-.33-.75-.75v-.9l-3.62 3.77a.72.72 0 0 1-.53.23.76.76 0 0 1-.54-.22l-1.77-1.76-4.47 4.59c-.23-.5-.42-1.02-.56-1.57L7.3 9.8a.72.72 0 0 1 .53-.23h.01c.19 0 .38.08.53.22l1.76 1.76 3.15-3.29h-1c-.41 0-.74-.33-.75-.75 0-.41.34-.75.75-.75l2.75-.01h.01c.03 0 .05.01.08.02.07 0 .14.01.21.04.03.01.05.03.08.05.05.03.11.05.16.1v.01c.02.01.02.03.03.04.13.14.2.31.19.49z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTransactionsUpBulk;
