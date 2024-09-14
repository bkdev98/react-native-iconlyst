import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProjectorScreen2Bold = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.45 11.46c0-.41.34-.75.75-.75h1.41a.749.749 0 1 1 0 1.5H6.2c-.41 0-.75-.34-.75-.75m.75 3.36c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.38a.749.749 0 1 1 0 1.5zM14 6.26a3.24 3.24 0 0 1 3.24 3.24A3.24 3.24 0 1 1 14 6.26m4.382 1.38h-.022A4.74 4.74 0 0 0 14 4.76c-1.95 0-3.63 1.19-4.36 2.88H5.628C3.786 7.64 2.5 8.977 2.5 10.89v3.46c0 1.792 1.075 3.028 2.707 3.213l-.336.52a.75.75 0 1 0 1.258.815l.84-1.297 10.01.008.834 1.289a.75.75 0 0 0 1.259-.815l-.328-.507c1.637-.168 2.756-1.438 2.756-3.226v-3.46c0-1.944-1.253-3.25-3.118-3.25"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14 10.12c-.34 0-.62-.28-.62-.62s.29-.62.62-.62c.34 0 .62.28.62.62s-.28.62-.62.62m0 1.5a2.121 2.121 0 0 0 1.63-3.48c-.39-.46-.98-.76-1.63-.76s-1.24.3-1.63.76A2.121 2.121 0 0 0 14 11.62"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystProjectorScreen2Bold;
