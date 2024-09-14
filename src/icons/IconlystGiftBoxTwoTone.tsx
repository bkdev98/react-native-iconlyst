import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGiftBoxTwoTone = ({
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
      d="M7.783 3.615h8.435C19.166 3.615 21 5.696 21 8.642v7.947c0 2.945-1.835 5.026-4.784 5.026H7.783c-2.948 0-4.782-2.081-4.782-5.026V8.642c0-2.946 1.843-5.027 4.782-5.027"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.003 12.052c0-1.787 1.24-3.234 2.77-3.234.66 0 1.193.533 1.193 1.193 0 1.438-1.775 2.605-3.964 2.605s-3.966-1.167-3.966-2.605c0-.66.535-1.193 1.194-1.193 1.529 0 2.77 1.447 2.77 3.234"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.003 13.179c0 1.787 1.24 3.234 2.77 3.234.66 0 1.193-.534 1.193-1.193 0-1.438-1.775-2.605-3.964-2.605s-3.966 1.167-3.966 2.605c0 .66.535 1.193 1.194 1.193 1.529 0 2.77-1.447 2.77-3.234"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 12.615H3M12 21.615v-18"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGiftBoxTwoTone;
