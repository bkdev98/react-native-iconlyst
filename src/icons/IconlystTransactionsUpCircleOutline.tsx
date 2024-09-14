import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransactionsUpCircleOutline = ({
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
      d="M15.887 16.377a.75.75 0 0 1-.75.75H8.865a.75.75 0 0 1 0-1.5h6.272a.75.75 0 0 1 .75.75M17.887 13.377a.75.75 0 0 1-.75.75h-2.482a.75.75 0 1 1 0-1.5h2.482a.75.75 0 0 1 .75.75M15.55 11.136a.75.75 0 0 0 .75-.75l-.005-2.763a.75.75 0 0 0-.751-.749l-2.762.005a.75.75 0 0 0 .002 1.5l2.012-.004.003 2.012c.001.415.337.75.752.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.534 15.422a.75.75 0 0 0 1.06-.02l3.753-3.893 1.765 1.76a.75.75 0 0 0 1.07-.013l4.907-5.118A.75.75 0 1 0 15.007 7.1l-4.378 4.566-1.763-1.758a.75.75 0 0 0-1.07.01l-4.281 4.444a.75.75 0 0 0 .02 1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 3.87a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5m-9.75 8.25c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75a9.75 9.75 0 0 1-9.75 9.75 9.75 9.75 0 0 1-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTransactionsUpCircleOutline;
