import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTopLeftLayoutOutline = ({
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
      d="M5.335 5.685c-.676.727-1.085 1.79-1.085 3.107v7.947c0 1.317.41 2.38 1.088 3.107.672.72 1.661 1.17 2.945 1.17h8.435c1.289 0 2.277-.45 2.948-1.17.675-.726 1.084-1.788 1.084-3.107V8.792c0-1.318-.409-2.38-1.085-3.107-.67-.72-1.659-1.17-2.948-1.17H8.283c-1.289 0-2.278.45-2.948 1.17M4.237 4.663c.984-1.057 2.387-1.647 4.046-1.647h8.434c1.66 0 3.062.59 4.046 1.647.979 1.051 1.487 2.502 1.487 4.129v7.947c0 1.628-.508 3.079-1.487 4.13-.984 1.056-2.386 1.647-4.045 1.647H8.283c-1.655 0-3.057-.591-4.042-1.647-.98-1.05-1.491-2.5-1.491-4.13V8.792c0-1.627.509-3.078 1.487-4.129"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.643 7.656a.75.75 0 0 1 .75-.75h7.297a.75.75 0 0 1 0 1.5H7.393a.75.75 0 0 1-.75-.75m0 4.379a.75.75 0 0 1 .75-.75h3.368a.75.75 0 0 1 0 1.5H7.393a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTopLeftLayoutOutline;
