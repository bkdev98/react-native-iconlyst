import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesWordBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.301 12.932H12.7L12 11.326z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.17 16.727a.75.75 0 0 1-.988-.388l-.83-1.906H10.65l-.832 1.906a.749.749 0 1 1-1.375-.6l2.871-6.59a.748.748 0 0 1 1.375 0l2.87 6.59a.75.75 0 0 1-.389.988m4.303-9.868a9.53 9.53 0 0 0-6.918-3.63 9.48 9.48 0 0 0-7.278 2.775c-2.806 2.815-3.57 7.137-1.913 10.732.04.099.162.404.99 1.846a.47.47 0 0 1-.024.51c-.222.313-.503.715-.722 1.044a1.38 1.38 0 0 0-.068 1.418c.238.445.7.72 1.204.72h.617c2.371 0 5.787-.002 6.603 0h.034a9.5 9.5 0 0 0 7.272-3.396c2.898-3.437 2.983-8.491.203-12.02"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesWordBold;
