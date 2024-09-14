import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchRefreshReloadRestartBold = ({
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
      d="m21.705 20.054-2.732-2.72a9.12 9.12 0 0 0 .965-10.247l.52.12a1 1 0 0 0 .449-1.949l-2.909-.67a.997.997 0 0 0-1.199.749l-.67 2.89a1.001 1.001 0 0 0 1.949.452l.135-.581a7.155 7.155 0 0 1-1.235 8.47 7.2 7.2 0 0 1-6.379 2.01 1 1 0 1 0-.354 1.969 9 9 0 0 0 1.625.145c2.05 0 4.045-.694 5.668-1.964l2.757 2.744a.998.998 0 0 0 1.414-.004 1 1 0 0 0-.004-1.414M6.805 13.498a1 1 0 0 0-1.2.75l-.131.57c-1.435-2.713-1.024-6.179 1.23-8.452a7.22 7.22 0 0 1 6.38-2.018.995.995 0 0 0 1.159-.81 1 1 0 0 0-.81-1.159 9.2 9.2 0 0 0-8.15 2.58C2.38 7.885 1.872 12.363 3.76 15.842l-.532-.124a1 1 0 1 0-.455 1.947l2.91.681q.112.026.227.026a1 1 0 0 0 .975-.775l.67-2.9a1 1 0 0 0-.75-1.2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchRefreshReloadRestartBold;
