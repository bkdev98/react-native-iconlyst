import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGameObjectsBold = ({
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
      d="m3.998 9.167 2.75-4.762h.054l2.722 4.809zm4.536-5.762a2.01 2.01 0 0 0-1.759-1.016c-.734 0-1.392.38-1.76 1.016L2.266 8.167a2 2 0 0 0 0 2.03 2.01 2.01 0 0 0 1.76 1.017h5.498c.735 0 1.392-.38 1.76-1.015a2.01 2.01 0 0 0 0-2.032zM17.547 4.443a2.467 2.467 0 0 1 2.464 2.464 2.467 2.467 0 0 1-2.464 2.464 2.467 2.467 0 0 1-2.465-2.464 2.467 2.467 0 0 1 2.465-2.464m0 6.928a4.47 4.47 0 0 0 4.464-4.464 4.47 4.47 0 0 0-4.464-4.464 4.47 4.47 0 0 0-4.465 4.464 4.47 4.47 0 0 0 4.465 4.464M19.927 19.382a.23.23 0 0 1-.23.229h-4.192a.23.23 0 0 1-.228-.23V15.19c0-.127.102-.23.228-.23h4.193c.126 0 .229.103.229.23zm-.23-6.421h-4.192c-1.228 0-2.228 1-2.228 2.229v4.192c0 1.229 1 2.229 2.228 2.229h4.193c1.229 0 2.229-1 2.229-2.23V15.19c0-1.23-1-2.23-2.23-2.23M10.448 13.584a1 1 0 0 0-1.414 0L6.677 15.94l-2.356-2.356a.999.999 0 1 0-1.414 1.414l2.356 2.357-2.356 2.356a.999.999 0 1 0 1.414 1.414l2.356-2.356 2.357 2.356a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414l-2.356-2.356 2.356-2.357a1 1 0 0 0 0-1.414"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGameObjectsBold;
