import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeMuteOutline = ({
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
      d="M15.682 20.843a3.54 3.54 0 0 1-1.88-.545l-3.206-2.005c-.281-.16-.6-.244-.923-.243-.422-.03-.731-.041-1-.051a3.58 3.58 0 0 1-2.556-.8c-1.172-.982-1.166-3.1-1.161-4.8v-.616c-.006-1.7-.012-3.814 1.157-4.79a3.57 3.57 0 0 1 2.559-.8c.268-.01.576-.02.939-.047a2.2 2.2 0 0 0 .983-.244l3.209-2.006a3.45 3.45 0 0 1 3.485-.152A3.9 3.9 0 0 1 19.36 6.97a71 71 0 0 1 0 10.265 3.85 3.85 0 0 1-2.047 3.206 3.5 3.5 0 0 1-1.631.402M9.738 16.55c.583.007 1.154.17 1.654.47l3.2 2a2 2 0 0 0 2.023.085 2.35 2.35 0 0 0 1.242-1.97 69.5 69.5 0 0 0 0-10.07 2.39 2.39 0 0 0-1.261-1.994 1.99 1.99 0 0 0-2 .09l-3.207 2.006a3.4 3.4 0 0 1-1.695.47c-.374.029-.692.04-.97.05-.887.032-1.155.042-1.653.455-.627.525-.621 2.4-.617 3.634v.624c0 1.24-.01 3.115.619 3.642.5.41.767.42 1.653.453.285.01.613.022 1 .05z"
    />
  </Svg>
);
export default IconlystVolumeMuteOutline;
