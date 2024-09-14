import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletReloadBold = ({
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
      d="M18.505 11.61a.749.749 0 1 1-1.502.002.749.749 0 0 1 1.502-.002m-2.63.06c0 .98.8 1.78 1.79 1.78h4a.3.3 0 0 0 .3-.3v-2.97a.3.3 0 0 0-.3-.3h-4c-.99 0-1.79.8-1.79 1.79"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.375 11.67c0-1.82 1.48-3.29 3.29-3.29h3.998a.29.29 0 0 0 .292-.301c-.176-2.84-2.541-5.099-5.42-5.099h-8.13c-3 0-5.44 2.44-5.44 5.44v2.997c0 .227.244.374.452.283a6 6 0 0 1 2.408-.5 6.01 6.01 0 0 1 5.26 8.916c-.117.211.029.485.27.485h5.18c3.02 0 5.276-2.45 5.423-5.35a.29.29 0 0 0-.293-.3h-4a3.29 3.29 0 0 1-3.29-3.28"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.535 17.03a2.494 2.494 0 0 1 4.136-1.87.75.75 0 0 0 1-1.117 3.95 3.95 0 0 0-2.644-1.002 3.996 3.996 0 0 0-3.992 3.99.75.75 0 0 0 1.5 0M9.268 16.28a.75.75 0 0 0-.75.75 2.494 2.494 0 0 1-4.142 1.866.75.75 0 0 0-.988 1.129 4 4 0 0 0 2.638.996 3.996 3.996 0 0 0 3.992-3.99.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletReloadBold;
