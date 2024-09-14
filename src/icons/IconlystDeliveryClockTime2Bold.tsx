import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryClockTime2Bold = ({
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
      d="M11.86 8.368a.75.75 0 0 1 .467 0l1.848.6-.012-6.802a.3.3 0 0 0-.301-.299l-3.574.008a.3.3 0 0 0-.3.3l.008 6.808z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.737 11.199c.85 0 1.657.166 2.4.464.206.083.44-.064.439-.286l-.01-4.008c-.01-1.64-.56-3.09-1.55-4.08-.94-.93-2.23-1.43-3.72-1.43h-.338a.3.3 0 0 0-.3.3l.019 7.84c0 .24-.11.47-.31.61a.76.76 0 0 1-.67.11l-2.6-.85-2.61.86a.767.767 0 0 1-.68-.1.77.77 0 0 1-.31-.61l-.01-7.84a.3.3 0 0 0-.3-.3h-.34c-3.14.01-5.26 2.23-5.26 5.51v.02l.02 7.94c0 1.59.49 2.96 1.42 3.95.96 1.02 2.28 1.56 3.84 1.56h.03l4.64-.01c.228 0 .374-.247.278-.455a6.4 6.4 0 0 1-.588-2.695c0-3.59 2.92-6.5 6.51-6.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.674 20.642a2.943 2.943 0 0 1-2.94-2.94 2.94 2.94 0 0 1 2.94-2.94 2.94 2.94 0 0 1 2.939 2.94 2.943 2.943 0 0 1-2.94 2.94m0-7.38a4.444 4.444 0 0 0-4.44 4.44 4.444 4.444 0 0 0 4.44 4.44 4.444 4.444 0 0 0 4.439-4.44 4.444 4.444 0 0 0-4.44-4.44"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.202 18.016-.798-.473v-1.072a.75.75 0 0 0-1.5 0v1.5c0 .265.14.51.368.646l1.166.69a.753.753 0 0 0 1.028-.263.75.75 0 0 0-.264-1.028"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryClockTime2Bold;
