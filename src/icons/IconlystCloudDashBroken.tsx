import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudDashBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.561 19.086a9.002 9.002 0 0 1-7.522 1.694M6.852 19.36a9 9 0 0 1-3.12-3.782M3.327 9.547a9 9 0 0 0-.299 3.034M4.777 6.634A9 9 0 0 1 6.23 5.082M20.24 8.388a9.01 9.01 0 0 0-8.597-5.381M19.646 16.724a8.92 8.92 0 0 0 1.345-5.06M9.605 14.712a2.2 2.2 0 0 1-.812-.165 2.02 2.02 0 0 1-1.191-1.844c0-1.27.896-2.015 2.005-2.024 0-.798.626-2.394 2.394-2.394 1.767 0 2.393 1.596 2.393 2.394 1.109.01 2.005.754 2.005 2.024 0 .82-.487 1.529-1.189 1.846-.3.12-.594.163-.818.163H12.79"
    />
  </Svg>
);
export default IconlystCloudDashBroken;
