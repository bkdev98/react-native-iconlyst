import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFontTypefaceOutline = ({
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
      d="M4.24 4.663c.986-1.057 2.388-1.647 4.043-1.647h8.435c1.66 0 3.061.59 4.045 1.647.979 1.05 1.487 2.501 1.487 4.129v7.947c0 1.628-.508 3.078-1.487 4.129-.984 1.057-2.386 1.648-4.046 1.648H8.283c-1.66 0-3.062-.591-4.046-1.648-.978-1.05-1.487-2.501-1.487-4.129V8.792c0-1.629.511-3.08 1.49-4.13m1.098 1.023C4.66 6.412 4.25 7.475 4.25 8.792v7.947c0 1.318.409 2.38 1.085 3.107.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.948-1.17.676-.726 1.085-1.789 1.085-3.107V8.792c0-1.318-.409-2.381-1.084-3.107-.67-.72-1.66-1.17-2.948-1.17H8.283c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.045 9.035a.75.75 0 0 1 .75-.75h7.413a.75.75 0 0 1 0 1.5h-2.992v6.712a.75.75 0 0 1-1.5 0V9.785H8.795a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFontTypefaceOutline;
