import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWeightBulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M15.007 17.835h-.016c-1.216-.01-2.39-1.336-2.927-3.32q-.33-1.185-.33-2.52t.33-2.52c.54-1.98 1.72-3.31 2.94-3.31.95 0 1.89.8 2.5 2.13 1.02 2.48 1.02 4.9-.01 7.39-.62 1.35-1.559 2.148-2.487 2.15m3.867-10.14c-.88-1.929-2.3-3.029-3.868-3.03H10.98c-2.676 0-4.772 3.222-4.772 7.335s2.096 7.334 4.772 7.334h4.005l.019.001c1.56 0 2.97-1.1 3.86-3.03.01-.01.01-.02.01-.03 1.18-2.84 1.18-5.72 0-8.58"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.957 12q.002-.823.106-1.598a.306.306 0 0 0-.301-.347H3.557c-1.076 0-1.95.874-1.95 1.949 0 1.07.874 1.942 1.95 1.942h1.204a.306.306 0 0 0 .301-.347 12.5 12.5 0 0 1-.105-1.598M20.447 10.06h-4.272A1.944 1.944 0 0 0 14.233 12c0 1.071.87 1.941 1.942 1.941h4.272a1.947 1.947 0 0 0 1.946-1.945 1.944 1.944 0 0 0-1.946-1.936"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWeightBulk;
