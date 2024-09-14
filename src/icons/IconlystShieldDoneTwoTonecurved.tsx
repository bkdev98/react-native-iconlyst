import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldDoneTwoTonecurved = ({
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
      d="M11.984 22.002c2.335 0 7.672-2.322 7.672-8.727 0-6.404.278-6.905-.337-7.521-.616-.616-3.826-2.607-7.335-2.607S5.265 5.137 4.65 5.754c-.616.616-.338 1.117-.338 7.52 0 6.406 5.338 8.728 7.672 8.728"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.386 12.27 1.892 1.896 3.898-3.9"
    />
  </Svg>
);
export default IconlystShieldDoneTwoTonecurved;
