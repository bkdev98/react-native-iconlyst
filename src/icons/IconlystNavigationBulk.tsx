import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationBulk = ({
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
      d="M20.147 16.926 14.139 4.87a2.45 2.45 0 0 0-2.209-1.368h-.012A2.45 2.45 0 0 0 9.71 4.889L3.843 16.915a2.45 2.45 0 0 0 .428 2.782 2.45 2.45 0 0 0 2.754.574l4.32-1.829a1.47 1.47 0 0 1 1.136-.005l4.51 1.87a2.449 2.449 0 0 0 2.752-.597c.71-.761.869-1.853.404-2.784"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystNavigationBulk;
