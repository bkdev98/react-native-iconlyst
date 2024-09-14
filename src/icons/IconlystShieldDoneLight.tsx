import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldDoneLight = ({
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
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="M11.985 21.606s7.672-2.323 7.672-8.727c0-6.405.277-6.905-.338-7.521-.616-.616-6.328-2.608-7.334-2.608S5.265 4.742 4.65 5.358c-.617.616-.338 1.116-.338 7.521s7.672 8.727 7.672 8.727" />
      <Path d="m9.386 11.875 1.892 1.895 3.898-3.9" />
    </G>
  </Svg>
);
export default IconlystShieldDoneLight;
