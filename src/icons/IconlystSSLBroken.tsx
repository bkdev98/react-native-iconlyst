import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSSLBroken = ({
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
      d="M12.249 21.324h4.217c2.949 0 4.783-2.08 4.783-5.026V8.351c0-2.945-1.834-5.027-4.782-5.027H8.032c-2.939 0-4.783 2.082-4.783 5.027v7.947c0 2.945 1.835 5.026 4.783 5.026h.58"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.66 17.114h-1.733V12.86M12.993 12.867h-.72a1.059 1.059 0 1 0 0 2.118h.15a1.06 1.06 0 0 1 0 2.12h-.75M8.549 12.867h-.72a1.059 1.059 0 1 0 0 2.118h.15a1.06 1.06 0 1 1 0 2.12H7.23M17.617 9.813H3.251M6.603 6.871H6.54m2.55 0h-.064m2.55 0h-.064"
    />
  </Svg>
);
export default IconlystSSLBroken;
