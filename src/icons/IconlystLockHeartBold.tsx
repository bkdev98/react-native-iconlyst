import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockHeartBold = ({
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
      d="M12.47 11.51a.654.654 0 0 0 .655-.65.66.66 0 0 0-.655-.66.66.66 0 0 0-.654.66c0 .357.294.65.654.65"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.22 12.867v1.682a.75.75 0 0 1-1.5 0v-1.682a2.15 2.15 0 0 1-1.404-2.008 2.16 2.16 0 0 1 2.154-2.16 2.16 2.16 0 0 1 2.155 2.16c0 .92-.587 1.703-1.405 2.008m8.241-5.891c-.68-1.68-1.993-2.906-3.695-3.452a6.16 6.16 0 0 0-2.909-.207c-.895.149-1.704.684-2.384 1.18-.655-.475-1.484-1.02-2.382-1.171a6.3 6.3 0 0 0-2.909.198c-3.73 1.207-4.878 5.289-3.836 8.534 1.624 5.212 8.62 8.525 8.917 8.664a.5.5 0 0 0 .422 0c.292-.136 7.184-3.393 8.905-8.66.552-1.715.506-3.521-.129-5.086"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLockHeartBold;
