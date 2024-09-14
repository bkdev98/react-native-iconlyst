import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPrinterOutline = ({
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
      d="M6.58 7.725A2.58 2.58 0 0 0 4 10.295v4.015a2.576 2.576 0 0 0 2.58 2.57h1.08a.75.75 0 0 1 0 1.5H6.58a4.077 4.077 0 0 1-4.08-4.07v-4.015a4.08 4.08 0 0 1 4.08-4.07h11.35c2.25 0 4.07 1.83 4.07 4.07v4.015c0 2.25-1.82 4.07-4.07 4.07h-1.053a.75.75 0 0 1 0-1.5h1.052a2.57 2.57 0 0 0 2.571-2.57v-4.015c0-1.414-1.15-2.57-2.57-2.57z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.662 14.059a.75.75 0 0 1 .75.75v3.77c0 .735.595 1.33 1.33 1.33h5.015a1.33 1.33 0 0 0 1.33-1.33v-3.77a.75.75 0 0 1 1.5 0v3.77a2.83 2.83 0 0 1-2.83 2.83H9.742a2.83 2.83 0 0 1-2.83-2.83v-3.77a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.658 17.574a.75.75 0 0 1 .75-.75h1.685a.75.75 0 0 1 0 1.5h-1.685a.75.75 0 0 1-.75-.75M14.875 10.55a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M17.107 10.55a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M9.742 4.09a1.33 1.33 0 0 0-1.33 1.33v1.568a.75.75 0 1 1-1.5 0V5.42a2.83 2.83 0 0 1 2.83-2.83h5.015a2.83 2.83 0 0 1 2.83 2.83v1.568a.75.75 0 0 1-1.5 0V5.42a1.33 1.33 0 0 0-1.33-1.33zM6.035 14.809a.75.75 0 0 1 .75-.75h10.928a.75.75 0 0 1 0 1.5H6.785a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPrinterOutline;
