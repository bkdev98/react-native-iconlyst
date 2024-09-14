import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesForwardBold = ({
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
      d="M16.23 13.035a.8.8 0 0 1-.162.24l-2.856 2.852a.75.75 0 0 1-1.06-.001.75.75 0 0 1 0-1.06l1.573-1.571H8.461a.75.75 0 0 1 0-1.5h5.264l-1.573-1.571a.749.749 0 1 1 1.06-1.061l2.856 2.852a.76.76 0 0 1 .22.53.8.8 0 0 1-.058.29m3.243-6.176a9.53 9.53 0 0 0-6.918-3.63 9.48 9.48 0 0 0-7.278 2.775c-2.805 2.815-3.57 7.136-1.913 10.732.04.099.162.403.99 1.846a.47.47 0 0 1-.024.51 44 44 0 0 0-.722 1.044 1.38 1.38 0 0 0-.068 1.418c.238.445.7.72 1.204.72h.617c2.371 0 5.786-.002 6.603 0h.033a9.5 9.5 0 0 0 7.271-3.396c2.9-3.436 2.985-8.491.205-12.02"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesForwardBold;
