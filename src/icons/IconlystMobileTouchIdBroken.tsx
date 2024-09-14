import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMobileTouchIdBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.952 17.707a3.62 3.62 0 0 0 3.618 3.617h5.515a3.62 3.62 0 0 0 3.618-3.618l-.001-4.464M9.38 3.324h-.81a3.62 3.62 0 0 0-3.619 3.62v6.71M12.486 5.236a3.774 3.774 0 0 1 4.74-1.622M18.86 4.922a3.76 3.76 0 0 1 .688 2.175v2.805M17.226 9.861V7.238a1.487 1.487 0 1 0-2.974 0v.398M11.996 9.032V7.566m2.256 3.194V9.422"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.326 17.59v-.063m-.26.05a.261.261 0 1 1 .523 0 .261.261 0 0 1-.523 0"
    />
  </Svg>
);
export default IconlystMobileTouchIdBroken;
