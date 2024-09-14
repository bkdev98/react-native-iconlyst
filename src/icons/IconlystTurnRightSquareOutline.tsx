import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnRightSquareOutline = ({
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
      d="M4.835 19.08c-.676-.726-1.085-1.789-1.085-3.106V8.026c0-1.317.409-2.38 1.085-3.106.67-.72 1.66-1.17 2.95-1.17h8.433c1.289 0 2.277.45 2.948 1.17.675.726 1.084 1.789 1.084 3.106v7.948c0 1.317-.41 2.38-1.087 3.106-.672.72-1.661 1.17-2.945 1.17H7.783c-1.289 0-2.278-.45-2.948-1.17m-1.098 1.022c.984 1.057 2.387 1.648 4.046 1.648h8.435c1.655 0 3.057-.591 4.042-1.647.979-1.05 1.49-2.501 1.49-4.13V8.027c0-1.627-.508-3.077-1.487-4.128-.983-1.057-2.386-1.648-4.045-1.648H7.784c-1.66 0-3.063.59-4.047 1.648-.978 1.05-1.487 2.5-1.487 4.128v7.948c0 1.627.509 3.078 1.487 4.128"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.29 16.679a.75.75 0 0 0 1.06 0l1.945-1.944a.75.75 0 0 0 0-1.06L14.35 11.73a.75.75 0 1 0-1.061 1.06l1.414 1.414-1.414 1.414a.75.75 0 0 0 0 1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.482 11.283a3.67 3.67 0 0 0 3.67 3.67h4.617a.75.75 0 0 0 0-1.5h-4.617a2.17 2.17 0 0 1 0-4.34h4.284a.75.75 0 0 0 0-1.5h-4.284a3.67 3.67 0 0 0-3.67 3.67"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnRightSquareOutline;
