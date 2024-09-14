import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownRightLayoutOutline = ({
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
      d="M4.237 4.663c.984-1.057 2.386-1.647 4.046-1.647h8.434c1.66 0 3.062.59 4.046 1.647.978 1.051 1.487 2.502 1.487 4.129v7.947c0 1.63-.511 3.08-1.49 4.13-.986 1.056-2.388 1.647-4.043 1.647H8.282c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.5-1.487-4.129V8.792c0-1.627.508-3.078 1.487-4.129m1.098 1.022c-.676.727-1.085 1.79-1.085 3.107v7.947c0 1.319.409 2.381 1.084 3.107.67.72 1.66 1.17 2.948 1.17h8.435c1.284 0 2.273-.45 2.945-1.17.678-.727 1.088-1.79 1.088-3.107V8.792c0-1.318-.409-2.38-1.085-3.107-.67-.72-1.66-1.17-2.948-1.17H8.283c-1.29 0-2.278.45-2.948 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.56 13.496a.75.75 0 0 1 .75-.75h7.298a.75.75 0 1 1 0 1.5H10.31a.75.75 0 0 1-.75-.75m3.93 4.379a.75.75 0 0 1 .75-.75h3.368a.75.75 0 1 1 0 1.5H14.24a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownRightLayoutOutline;
