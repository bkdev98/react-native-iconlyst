import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldFailLight = ({
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
      <Path d="M11.985 21.606s7.672-2.323 7.672-8.727c0-6.405.278-6.905-.338-7.521-.615-.616-6.328-2.608-7.334-2.608S5.266 4.742 4.65 5.358s-.337 1.116-.337 7.521 7.672 8.727 7.672 8.727M13.864 13.825l-3.758-3.758M10.106 13.825l3.758-3.758" />
    </G>
  </Svg>
);
export default IconlystShieldFailLight;
