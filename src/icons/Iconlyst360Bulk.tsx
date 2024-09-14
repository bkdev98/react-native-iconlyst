import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst360Bulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M5.718 11.71 7.15 9.937a1 1 0 0 0-.779-1.628H2.253a1 1 0 1 0 0 2H4.28l-1.053 1.305a1 1 0 0 0 .778 1.628 1.361 1.361 0 0 1 0 2.72 1.35 1.35 0 0 1-.962-.4.999.999 0 1 0-1.416 1.412 3.34 3.34 0 0 0 2.378.988 3.364 3.364 0 0 0 3.36-3.361 3.36 3.36 0 0 0-1.647-2.89M11 15.844a1.31 1.31 0 0 1 0-2.618 1.31 1.31 0 0 1 0 2.618m.859-4.49 1.13-1.424a1 1 0 1 0-1.565-1.244L8.312 12.6c-.012.015-.014.035-.026.051a3.3 3.3 0 0 0-.595 1.884A3.313 3.313 0 0 0 11 17.845a3.313 3.313 0 0 0 3.309-3.31 3.304 3.304 0 0 0-2.45-3.18M19.072 14.78a1.06 1.06 0 0 1-2.118 0v-3.411a1.06 1.06 0 1 1 2.118 0zm-1.06-6.471a3.06 3.06 0 0 0-3.058 3.06v3.41a3.06 3.06 0 0 0 3.058 3.06 3.06 3.06 0 0 0 3.06-3.06v-3.41a3.063 3.063 0 0 0-3.06-3.06" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.747 6.64h-.042a.98.98 0 0 0-.98 1c0 .553.469 1 1.022 1a1 1 0 1 0 0-2"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst360Bulk;
