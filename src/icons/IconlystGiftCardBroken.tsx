import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGiftCardBroken = ({
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
      d="M6.604 4.953c-2.38 0-3.854 1.772-3.854 4.277v6.771c0 2.505 1.473 4.278 3.854 4.278h10.78c2.382 0 3.866-1.773 3.866-4.278V9.23c0-2.505-1.494-4.277-3.865-4.277h-6.543"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.062 11.193c0-1.787 1.24-3.234 2.77-3.234.66 0 1.194.533 1.194 1.193 0 1.438-1.775 2.605-3.965 2.605m-3.965-2.605c0-.66.534-1.193 1.193-1.193 1.53 0 2.77 1.447 2.77 3.234M11.117 14.99l2.943-3.234 2.942 3.235M21.24 11.837H2.762M14.06 17.514V4.952M6.247 16.575h1.715"
    />
  </Svg>
);
export default IconlystGiftCardBroken;
