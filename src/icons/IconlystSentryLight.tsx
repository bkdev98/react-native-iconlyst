import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSentryLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G clipPath="url(#prefix__a)">
      <Path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 18.014c-.017 1.046.847 1.947 1.892 2.002.67.034 0 0 3.113 0A4.996 4.996 0 0 0 4.342 15.2q.838-1.46 2.041-3.534a9.01 9.01 0 0 1 5.626 8.349h4.003m0 0c.664 0 2.34.005 3.003 0a2.03 2.03 0 0 0 1.65-.889 2.03 2.03 0 0 0 .192-1.864L13.75 5.001A2.03 2.03 0 0 0 12 3.97c-.716 0-1.406.407-1.752 1.032l-1.842 3.18c4.487 2.051 7.608 6.577 7.608 11.835"
      />
    </G>
    <Defs>
      <ClipPath id="prefix__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default IconlystSentryLight;
