import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPetsPharmacyLight = ({
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
    <G stroke={props.color} strokeWidth={1.5} clipPath="url(#prefix__a)">
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 11.3v-1.17a1 1 0 0 0-1-1h-4.829V4.3a1 1 0 0 0-1-1H9.83a1 1 0 0 0-1 1v4.83H4a1 1 0 0 0-1 1v4.342a1 1 0 0 0 1 1h4.829v4.829a1 1 0 0 0 1 1h1.741"
      />
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.333 13.936v-.054m-.007-.161a.237.237 0 1 0 .003.473.237.237 0 0 0-.003-.473M20.77 15.681v-.054m-.008-.161a.237.237 0 1 0 .003.473.237.237 0 0 0-.003-.473M13.913 15.681v-.054m-.007-.161a.237.237 0 1 0 .003.473.237.237 0 0 0-.003-.473"
      />
      <Path d="M17.366 20.874c1.439 0 3.264 1.247 3.238-.672-.01-1.44-1.51-2.79-3.238-2.792-1.738 0-3.465 1.468-3.226 2.964.266 1.736 1.95.5 3.226.5Z" />
    </G>
    <Defs>
      <ClipPath id="prefix__a">
        <Path fill="#fff" d="M0 .3h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default IconlystPetsPharmacyLight;
