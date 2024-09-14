import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarStickerOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M3.987 3.96c.983-1.057 2.386-1.647 4.045-1.647h8.434c1.66 0 3.063.59 4.047 1.647C21.492 5.011 22 6.461 22 8.09v5.893c0 .818-.316 1.605-.884 2.195l-4.474 4.66a3.17 3.17 0 0 1-2.286.976H8.031c-1.655 0-3.057-.592-4.042-1.648-.979-1.05-1.49-2.5-1.49-4.129V8.09c0-1.628.508-3.078 1.487-4.129m1.098 1.022C4.409 5.708 4 6.772 4 8.09v7.947c0 1.317.41 2.38 1.087 3.106.672.721 1.661 1.17 2.945 1.17h6.323c.455 0 .89-.185 1.205-.513l4.475-4.66c.298-.311.465-.726.465-1.157V8.09c0-1.318-.409-2.38-1.085-3.107-.67-.72-1.66-1.17-2.95-1.17H8.033c-1.289 0-2.277.45-2.947 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.938 13.803h3.235a.75.75 0 1 1 0 1.5h-3.232a2.27 2.27 0 0 0-2.265 2.271v3.415a.75.75 0 0 1-1.5 0v-3.414a3.77 3.77 0 0 1 3.762-3.772M7.209 9.81c0-1.144.927-2.072 2.071-2.072h2.454a.75.75 0 0 1 0 1.5H9.28a.571.571 0 0 0 0 1.143h1.51a2.071 2.071 0 1 1 0 4.143H8.337a.75.75 0 0 1 0-1.5h2.453a.571.571 0 1 0 0-1.143H9.28A2.07 2.07 0 0 1 7.21 9.81"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.035 6.621a.75.75 0 0 1 .75.75V8.49a.75.75 0 0 1-1.5 0V7.371a.75.75 0 0 1 .75-.75m0 6.401a.75.75 0 0 1 .75.75v1.11a.75.75 0 0 1-1.5 0v-1.11a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDollarStickerOutline;
