import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartbreakBulk = ({
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
      d="M17.789 3.525c1.702.546 3.014 1.77 3.696 3.452.634 1.565.68 3.372.129 5.087v.002c-1.722 5.265-8.613 8.52-8.905 8.657a.5.5 0 0 1-.422 0c-.298-.14-7.294-3.452-8.917-8.664-1.038-3.232.099-7.292 3.792-8.518l.04-.003q.03.001.059-.007c1.248-.396 2.587-.29 3.585.284.44.253.839.609 1.182 1.052.365-.338.957-.717 1.207-.864.272.356.524.737.73 1.165.697 1.41.621 1.885.487 2.11.135-.225.211-.699-.486-2.11a6.8 6.8 0 0 0-.731-1.165c.504-.314 1.054-.586 1.645-.685a6.1 6.1 0 0 1 2.909.207m-5.575 6.324 2.13 2.274zm-1.112 5.726a.75.75 0 0 1 .126-.457l1.613-2.406-1.613 2.406a.75.75 0 0 0-.126.457m-.649-5.67a.75.75 0 0 1 .185-.533l.14-.16c1.137-1.298 1.791-2.044 2.195-2.474-.404.43-1.058 1.176-2.195 2.474l-.14.16a.75.75 0 0 0-.184.534"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13.966 5.168a6.8 6.8 0 0 0-.731-1.165c-.25.147-.842.526-1.207.864q.333.429.59.96c.088.175.253.613.355.91-.404.43-1.058 1.177-2.195 2.475l-.14.16a.75.75 0 0 0 .017 1.006l2.186 2.334-1.613 2.406a.751.751 0 0 0 1.246.836l1.946-2.901a.75.75 0 0 0-.076-.93l-2.13-2.274 2.14-2.442.013-.014c.154-.182.44-.521-.401-2.225"
    />
  </Svg>
);
export default IconlystHeartbreakBulk;
