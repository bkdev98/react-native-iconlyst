import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCenterRightLayoutOutline = ({
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
      d="M5.334 5.685C4.66 6.411 4.25 7.474 4.25 8.792v7.947c0 1.318.409 2.38 1.085 3.107.67.72 1.659 1.17 2.948 1.17h8.434c1.289 0 2.278-.45 2.948-1.17.676-.726 1.085-1.79 1.085-3.107V8.792c0-1.317-.41-2.38-1.088-3.106-.672-.721-1.661-1.17-2.945-1.17H8.282c-1.289 0-2.277.45-2.948 1.17M4.237 4.663c.983-1.057 2.386-1.647 4.045-1.647h8.435c1.655 0 3.057.59 4.042 1.647.98 1.05 1.491 2.5 1.491 4.129v7.947c0 1.628-.509 3.078-1.487 4.129-.984 1.057-2.387 1.648-4.046 1.648H8.283c-1.66 0-3.062-.591-4.046-1.648-.979-1.05-1.487-2.501-1.487-4.129V8.792c0-1.628.508-3.078 1.487-4.129"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.56 10.578a.75.75 0 0 1 .75-.75h7.298a.75.75 0 1 1 0 1.5H10.31a.75.75 0 0 1-.75-.75m3.93 4.379a.75.75 0 0 1 .75-.75h3.368a.75.75 0 1 1 0 1.5H14.24a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCenterRightLayoutOutline;
