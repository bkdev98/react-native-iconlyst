import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForward5s2Bulk = ({
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
      d="M18.767 9.427a.749.749 0 0 0-.592 1.206l1.49 1.943c.02.027.051.04.075.062q.021.02.046.038a.7.7 0 0 0 .19.128c.05.023.108.028.164.038.041.007.077.028.12.028l.008-.002.01.002a.74.74 0 0 0 .608-.334l1.466-1.915a.748.748 0 0 0-.595-1.206h-.003l-.726.003V8.39c0-3.183-2.049-5.32-5.098-5.32H8.261c-3.05 0-5.099 2.137-5.099 5.32v7.221c0 3.181 2.05 5.32 5.1 5.32h7.668c3.05 0 5.098-2.139 5.098-5.32a.75.75 0 0 0-1.5 0c0 2.32-1.412 3.82-3.598 3.82H8.262c-2.187 0-3.6-1.5-3.6-3.82v-7.22c0-2.32 1.413-3.82 3.6-3.82h7.668c2.186 0 3.598 1.5 3.598 3.82v1.033z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.218 13.94h-1.866a.75.75 0 0 0 0 1.5h1.866a2.103 2.103 0 0 0 2.102-2.1c0-1.158-.943-2.1-2.102-2.1h-1.116v-1.06h2.212a.75.75 0 0 0 0-1.5h-2.962a.75.75 0 0 0-.75.75v2.56c0 .414.336.75.75.75h1.866c.332 0 .602.269.602.6s-.27.6-.602.6"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystForward5s2Bulk;
