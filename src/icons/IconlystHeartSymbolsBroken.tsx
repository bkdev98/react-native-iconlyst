import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartSymbolsBroken = ({
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
      d="M19.082 14.182c1.326-1.6 2.168-3.434 1.851-5.625-.532-3.478-4.163-5.431-7.294-3.88a5.4 5.4 0 0 0-1.637 1.248 5.4 5.4 0 0 0-2.236-1.498c-3.3-1.17-6.386 1.17-6.734 4.45-.489 4.944 4.803 7.984 8.105 10.695.371.31.914.395 1.362.21.215-.082.388-.237.563-.38 1.004-.824 2.185-1.684 3.323-2.621"
    />
  </Svg>
);
export default IconlystHeartSymbolsBroken;
