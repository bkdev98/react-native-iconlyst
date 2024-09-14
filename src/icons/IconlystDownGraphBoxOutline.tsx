import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownGraphBoxOutline = ({
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
      d="M5.335 5.038c-.676.726-1.085 1.789-1.085 3.107v7.947c0 1.317.41 2.38 1.088 3.106.672.72 1.661 1.17 2.945 1.17h8.435c1.289 0 2.277-.45 2.948-1.17.675-.726 1.084-1.788 1.084-3.106V8.145c0-1.318-.409-2.381-1.085-3.107-.67-.72-1.659-1.17-2.948-1.17H8.283c-1.289 0-2.278.45-2.948 1.17M4.237 4.016c.984-1.057 2.387-1.648 4.046-1.648h8.434c1.66 0 3.062.591 4.046 1.648.979 1.05 1.487 2.501 1.487 4.129v7.947a7 7 0 0 1-.184 1.628.8.8 0 0 1-.065.253 5.4 5.4 0 0 1-1.238 2.247c-.983 1.057-2.386 1.648-4.045 1.648H8.283c-1.655 0-3.058-.591-4.042-1.647-.98-1.05-1.491-2.5-1.491-4.13V8.146c0-1.628.509-3.078 1.487-4.13"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.184 6.093a.75.75 0 0 1 1.058.07l6.07 6.932 3.647-3.252a.75.75 0 0 1 1.044.045l6.86 7.248a.75.75 0 0 1-1.09 1.031l-6.36-6.72-3.669 3.272a.75.75 0 0 1-1.063-.066L3.113 7.15a.75.75 0 0 1 .07-1.058"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownGraphBoxOutline;
