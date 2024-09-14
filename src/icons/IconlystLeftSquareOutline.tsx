import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftSquareOutline = ({
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
      d="M20.263 20.102c.979-1.05 1.487-2.501 1.487-4.128V8.026c0-1.628-.511-3.078-1.49-4.129-.985-1.056-2.387-1.647-4.042-1.647H7.783c-1.66 0-3.062.59-4.046 1.648-.978 1.05-1.487 2.5-1.487 4.128v7.948c0 1.627.509 3.078 1.487 4.128.984 1.057 2.387 1.648 4.047 1.648h8.434c1.66 0 3.062-.59 4.045-1.648m-1.098-1.022c-.67.72-1.658 1.17-2.947 1.17H7.784c-1.29 0-2.278-.45-2.949-1.17-.676-.726-1.085-1.789-1.085-3.106V8.026c0-1.317.409-2.38 1.085-3.106.67-.72 1.66-1.17 2.948-1.17h8.435c1.284 0 2.273.45 2.945 1.17.677.727 1.087 1.79 1.087 3.106v7.948c0 1.317-.409 2.38-1.084 3.106"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.934 15.904a.75.75 0 0 0-.002-1.06l-2.859-2.846 2.858-2.846a.75.75 0 1 0-1.058-1.063l-3.392 3.377a.75.75 0 0 0 0 1.063l3.392 3.377a.75.75 0 0 0 1.06-.002"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftSquareOutline;
