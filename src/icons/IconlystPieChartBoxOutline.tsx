import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPieChartBoxOutline = ({
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
      d="M5.085 5.04C4.409 5.764 4 6.827 4 8.145v7.947c0 1.317.41 2.38 1.088 3.106.672.72 1.661 1.17 2.945 1.17h8.435c1.289 0 2.277-.45 2.948-1.17.675-.725 1.084-1.788 1.084-3.106V8.146c0-1.318-.409-2.38-1.085-3.107-.67-.72-1.659-1.17-2.948-1.17H8.033c-1.289 0-2.278.45-2.948 1.17M3.987 4.016c.984-1.057 2.387-1.648 4.046-1.648h8.434c1.66 0 3.062.591 4.046 1.648C21.492 5.067 22 6.519 22 8.147v7.946c0 1.628-.508 3.078-1.487 4.129-.984 1.057-2.386 1.647-4.045 1.647H8.033c-1.655 0-3.057-.59-4.042-1.647-.98-1.05-1.491-2.5-1.491-4.13V8.147c0-1.627.509-3.078 1.487-4.13"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.276 8.305c.794.847 1.364 1.976 1.346 2.967a1.085 1.085 0 0 1-1.01 1.06c-.776.02-2.19.015-3.103.009h-.001a1.65 1.65 0 0 1-1.64-1.647c-.003-.856-.005-2.13.003-2.889v-.018a1.076 1.076 0 0 1 1.032-1.038h.016c1.367-.025 2.548.693 3.357 1.556m-4.408 2.389.75-.002zm1.5-2.414c-.004.74-.003 1.71 0 2.41 0 .082.065.15.152.15.74.006 1.78.01 2.548.002-.115-.444-.41-1.003-.886-1.51-.514-.55-1.15-.941-1.815-1.052"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.522 7.765a.75.75 0 0 1-.259 1.029 3.873 3.873 0 1 0 5.357 5.233.75.75 0 1 1 1.306.739 5.373 5.373 0 1 1-7.432-7.26.75.75 0 0 1 1.028.26"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPieChartBoxOutline;
