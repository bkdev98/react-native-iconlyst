import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQRScanOutline = ({
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
      d="M2.5 15.41a2.495 2.495 0 0 1 2.496-2.496H7.87a2.496 2.496 0 0 1 2.496 2.496v2.874A2.496 2.496 0 0 1 7.87 20.78H4.996A2.495 2.495 0 0 1 2.5 18.284zm2.496-.996A.995.995 0 0 0 4 15.41v2.874c0 .55.446.996.996.996H7.87c.55 0 .995-.446.995-.996V15.41a.996.996 0 0 0-.995-.996z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.432 16.086a.75.75 0 0 1 .75.75v.01a.75.75 0 1 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M6.432 5.477a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 4.8a2.495 2.495 0 0 1 2.496-2.495H7.87A2.496 2.496 0 0 1 10.367 4.8v2.875A2.496 2.496 0 0 1 7.87 10.17H4.996A2.495 2.495 0 0 1 2.5 7.675zm2.496-.995A.995.995 0 0 0 4 4.8v2.875c0 .55.446.995.996.995H7.87c.55 0 .995-.446.995-.995V4.8a.996.996 0 0 0-.995-.995zM15.603 3.805a.995.995 0 0 0-.996.995v2.875c0 .55.446.995.996.995h2.875a.995.995 0 0 0 .995-.995V4.8a.995.995 0 0 0-.995-.995zm-2.496.995a2.495 2.495 0 0 1 2.496-2.495h2.875A2.495 2.495 0 0 1 20.973 4.8v2.875a2.495 2.495 0 0 1-2.495 2.495h-2.875a2.495 2.495 0 0 1-2.496-2.495z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.041 5.484a.75.75 0 0 1 .75.75v.011a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M17.243 14.133a2.635 2.635 0 1 0 0 5.27 2.635 2.635 0 0 0 0-5.27m-4.136 2.635a4.135 4.135 0 1 1 8.27 0 4.135 4.135 0 0 1-8.27 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.016 18.72a.75.75 0 0 1 1.06 0l1.704 1.699a.75.75 0 0 1-1.06 1.062l-1.703-1.7a.75.75 0 0 1-.001-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystQRScanOutline;
