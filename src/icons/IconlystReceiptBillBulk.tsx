import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillBulk = ({
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
      d="M5.636 21.174h-.023a3.36 3.36 0 0 1-2.369-.965 3.37 3.37 0 0 1-.994-2.385v-7.25c0-.678.333-1.284.892-1.622a1.71 1.71 0 0 1 1.69-.053l.652.34a.71.71 0 0 0 .606.013L7.319 8.7q.075-.03.15-.046v-3.37c0-.673.33-1.28.884-1.62a1.72 1.72 0 0 1 1.688-.068l.66.344a.65.65 0 0 0 .593.019l1.846-.82a3.6 3.6 0 0 1 2.936 0l1.848.82a.65.65 0 0 0 .583-.013l.664-.346a1.72 1.72 0 0 1 1.695.065c.554.34.884.946.884 1.62l-.008 11.47c0 2.727-1.529 4.42-3.99 4.42zm1.832-10.897v7.547a1.855 1.855 0 0 1-1.875 1.85 1.86 1.86 0 0 1-1.291-.529 1.87 1.87 0 0 1-.552-1.32v-7.25c0-.222.129-.316.168-.34.103-.064.187-.022.218-.007l.002.001.657.342a2.22 2.22 0 0 0 1.894.057z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.082 9.713H11.97a.75.75 0 0 1 0-1.5h2.112a.75.75 0 0 1 0 1.5m3.276 3.28H11.97a.75.75 0 0 1 0-1.5h5.388a.75.75 0 0 1 0 1.5m0 3.68H11.97a.75.75 0 0 1 0-1.5h5.388a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReceiptBillBulk;
