import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockHeartBulk = ({
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
      d="M21.462 6.976c-.68-1.68-1.994-2.906-3.695-3.452a6.16 6.16 0 0 0-2.91-.207c-.894.149-1.703.684-2.383 1.18-.655-.475-1.485-1.02-2.383-1.171a6.3 6.3 0 0 0-2.909.198c-3.73 1.207-4.878 5.289-3.836 8.534 1.624 5.212 8.62 8.525 8.918 8.664a.5.5 0 0 0 .422 0c.291-.136 7.183-3.393 8.904-8.66.552-1.715.506-3.521-.128-5.086"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.22 14.55v-1.683a2.15 2.15 0 0 0 1.405-2.008A2.16 2.16 0 0 0 12.47 8.7a2.16 2.16 0 0 0-2.154 2.16c0 .921.586 1.702 1.404 2.008v1.682a.75.75 0 0 0 1.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLockHeartBulk;
