import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLogicFlowOutline = ({
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
      d="M17.251 5.21c0-1.037-.84-1.876-1.875-1.876h-6.75c-1.036 0-1.876.84-1.876 1.875v1.125c0 1.036.84 1.875 1.876 1.875h6.75c1.036 0 1.875-.84 1.875-1.875zm-1.875-.376c.207 0 .375.168.375.375v1.125a.375.375 0 0 1-.375.375h-6.75a.375.375 0 0 1-.376-.375V5.21c0-.207.168-.375.376-.375zM13.326 11.1a1.875 1.875 0 0 0-2.652 0l-3.182 3.182a1.875 1.875 0 0 0 0 2.652l3.183 3.182c.732.732 1.919.732 2.651 0l3.182-3.182a1.875 1.875 0 0 0 0-2.652zm-1.59 1.06a.375.375 0 0 1 .53 0l3.182 3.183a.375.375 0 0 1 0 .53l-3.182 3.182a.375.375 0 0 1-.53 0l-3.183-3.182a.375.375 0 0 1 0-.53z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.001 6.709a.75.75 0 0 0-.75.75V11.3a.75.75 0 0 0 1.5 0V7.46a.75.75 0 0 0-.75-.75M8.442 15.537a.75.75 0 0 0-.75-.75H4.125c-1.036 0-1.875.84-1.875 1.875v2.395a.75.75 0 0 0 1.5 0v-2.395c0-.207.168-.375.375-.375h3.567a.75.75 0 0 0 .75-.75M15.558 15.537a.75.75 0 0 1 .75-.75h3.567c1.036 0 1.875.84 1.875 1.875v2.395a.75.75 0 0 1-1.5 0v-2.395a.375.375 0 0 0-.375-.375h-3.567a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLogicFlowOutline;
