import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger1Bulk = ({
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
      d="M11.046 9.542a1 1 0 0 1 .947-.02l8.015 4.098a3.29 3.29 0 0 1-1.298 6.315H5.29A3.29 3.29 0 0 1 2 16.643v-.086c0-1.301.767-2.478 1.951-3.006zm.516 2.005-6.672 3.77a1 1 0 0 1-.102.051A1.29 1.29 0 0 0 4 16.557v.086a1.29 1.29 0 0 0 1.29 1.292h13.42a1.29 1.29 0 0 0 .493-2.484l-.073-.034z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.688 6.11c-.691 0-1.18.455-1.267 1.177-.172 1.441-2.023 1.442-2.001-.071.019-1.345.972-2.553 2.226-2.996.731-.258 1.645-.183 2.335.15 1.096.528 1.714 1.477 1.801 2.765.082 1.204-.489 2.253-1.644 3.023-.203.135-.354.261-.335.28.02.02.593.322 1.274.672.784.404 1.291.708 1.38.829.197.268.2.819.004 1.082-.212.287-.577.513-.827.514-.141 0-.895-.343-2.153-.981l-1.937-.981-1.69.954c-1.656.935-1.698.954-2.04.92-.748-.07-1.163-.916-.75-1.525.166-.243 2.263-1.472 4.782-2.801.655-.346 1.305-.722 1.444-.837.483-.398.614-1.016.336-1.589-.187-.385-.507-.585-.938-.585"
    />
  </Svg>
);
export default IconlystCoatHanger1Bulk;
