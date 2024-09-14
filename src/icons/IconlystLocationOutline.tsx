import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLocationOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 2c4.549 0 8.25 3.729 8.25 8.313 0 5.635-6.456 11.187-8.25 11.187S4 15.948 4 10.313C4 5.729 7.7 2 12.25 2m0 1.5c-3.722 0-6.75 3.057-6.75 6.813 0 4.779 5.624 9.435 6.75 9.683 1.126-.249 6.75-4.905 6.75-9.683C19 6.557 15.971 3.5 12.25 3.5m0 3.5a3.254 3.254 0 0 1 3.25 3.251 3.253 3.253 0 0 1-3.25 3.249A3.253 3.253 0 0 1 9 10.251 3.254 3.254 0 0 1 12.25 7m0 1.5A1.751 1.751 0 1 0 14 10.251c0-.966-.784-1.751-1.75-1.751"
    />
  </Svg>
);
export default IconlystLocationOutline;
