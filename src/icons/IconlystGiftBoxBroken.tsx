import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGiftBoxBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.001 11.266v5.323c0 2.945 1.834 5.026 4.782 5.026h8.434c2.949 0 4.784-2.081 4.784-5.026V8.642c0-2.946-1.835-5.027-4.783-5.027H7.783c-2.516 0-4.229 1.526-4.67 3.812"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.003 12.052c0-1.787 1.24-3.234 2.77-3.234.66 0 1.193.533 1.193 1.193m-3.964 2.605c-2.19 0-3.966-1.167-3.966-2.605 0-.66.535-1.193 1.194-1.193 1.529 0 2.77 1.447 2.77 3.234"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.003 13.179c0 1.787 1.24 3.234 2.77 3.234.66 0 1.193-.534 1.193-1.193 0-1.438-1.775-2.605-3.964-2.605s-3.966 1.167-3.966 2.605c0 .66.535 1.193 1.194 1.193 1.529 0 2.77-1.447 2.77-3.234M21 12.615H3M12 19.025V3.614"
    />
  </Svg>
);
export default IconlystGiftBoxBroken;
