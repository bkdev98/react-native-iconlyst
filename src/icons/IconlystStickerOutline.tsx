import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.987 3.897C4.97 2.841 6.373 2.25 8.032 2.25h8.435c1.66 0 3.062.59 4.046 1.647C21.492 4.948 22 6.4 22 8.027v5.892a3.17 3.17 0 0 1-.883 2.195l-4.475 4.66a3.17 3.17 0 0 1-2.286.976H8.031c-1.655 0-3.057-.591-4.042-1.647-.979-1.05-1.49-2.501-1.49-4.13V8.027c0-1.627.508-3.078 1.487-4.129M5.084 4.92C4.41 5.645 4 6.708 4 8.026v7.948c0 1.317.41 2.38 1.087 3.106.672.72 1.661 1.17 2.945 1.17h6.323c.455 0 .89-.185 1.205-.514l4.474-4.66c.3-.312.466-.726.466-1.157V8.026c0-1.318-.409-2.38-1.085-3.107-.67-.72-1.659-1.169-2.948-1.169H8.032c-1.289 0-2.277.45-2.948 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.938 13.742h3.235a.75.75 0 1 1 0 1.5h-3.232a2.27 2.27 0 0 0-2.265 2.272v3.414a.75.75 0 0 1-1.5 0v-3.413a3.77 3.77 0 0 1 3.762-3.773"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStickerOutline;
