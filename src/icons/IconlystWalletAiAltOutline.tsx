import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletAiAltOutline = ({
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
      d="M14.59 12.002a.75.75 0 0 1 .75-.75h.002a.75.75 0 0 1 0 1.5h-.001a.75.75 0 0 1-.75-.75M9.73 4.084a.75.75 0 0 1 .75-.75h4.068a5.454 5.454 0 0 1 5.454 5.454v.796a.75.75 0 1 1-1.5 0v-.796a3.954 3.954 0 0 0-3.954-3.954H10.48a.75.75 0 0 1-.75-.75M3 10.502a.75.75 0 0 1 .75.75v3.968a3.95 3.95 0 0 0 3.953 3.945h6.845a3.95 3.95 0 0 0 3.954-3.945v-.817a.75.75 0 0 1 1.5 0v.817a5.45 5.45 0 0 1-5.454 5.445H7.703A5.45 5.45 0 0 1 2.25 15.22v-3.968a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.976 10.342a1.11 1.11 0 0 0-1.111 1.11v1.098c0 .614.497 1.11 1.11 1.11h4.165a1.11 1.11 0 0 0 1.11-1.11v-1.098a1.11 1.11 0 0 0-1.11-1.11zm-2.611 1.11a2.61 2.61 0 0 1 2.61-2.61h4.165a2.61 2.61 0 0 1 2.61 2.61v1.098a2.61 2.61 0 0 1-2.61 2.61h-4.164a2.61 2.61 0 0 1-2.611-2.61zM5.596 9.308a.75.75 0 0 1-.704-.49l-.1-.273a3.01 3.01 0 0 0-1.78-1.782l-.273-.101a.75.75 0 0 1 0-1.407l.273-.1a3.01 3.01 0 0 0 1.78-1.782l.1-.274a.75.75 0 0 1 1.407 0l.101.274A3.01 3.01 0 0 0 8.18 5.154l.273.101a.75.75 0 0 1 0 1.407l-.273.101A3.01 3.01 0 0 0 6.4 8.545l-.1.273a.75.75 0 0 1-.704.49m.948-3.35a4.5 4.5 0 0 1-.948-.949 4.5 4.5 0 0 1-.949.95c.362.267.682.587.949.95.267-.363.587-.683.948-.95M8.191 13.444a.75.75 0 0 1-.717-.532 1.02 1.02 0 0 0-.678-.68.75.75 0 0 1 0-1.434 1.02 1.02 0 0 0 .678-.68.75.75 0 0 1 1.435 0c.1.327.354.581.678.68a.75.75 0 0 1 0 1.435 1.02 1.02 0 0 0-.678.679.75.75 0 0 1-.718.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletAiAltOutline;
