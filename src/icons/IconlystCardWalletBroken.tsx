import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardWalletBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 20.31H7.57a4.32 4.32 0 0 1-4.32-4.32V8.01a4.32 4.32 0 0 1 4.32-4.32h9.36a4.32 4.32 0 0 1 4.32 4.32v7.98a4.32 4.32 0 0 1-4.32 4.32h-1.632"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.03 12.22a1.79 1.79 0 1 0 1.789 1.79M6.482 9.344h.01l.009-.01 5.013-3.14a3.277 3.277 0 0 1 4.505 1.044l1.373 2.19M3.25 9.429h18"
    />
  </Svg>
);
export default IconlystCardWalletBroken;
