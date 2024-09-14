import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGalleryViewOutline = ({
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
      d="M3.99 3.897C4.975 2.841 6.377 2.25 8.033 2.25h8.434c1.66 0 3.062.59 4.046 1.648.978 1.05 1.486 2.5 1.486 4.128v7.947c0 1.627-.508 3.078-1.487 4.128-.984 1.057-2.386 1.648-4.046 1.648H8.033c-1.66 0-3.062-.59-4.046-1.647C3.01 19.05 2.5 17.6 2.5 15.973V8.026c0-1.628.511-3.079 1.49-4.129M5.088 4.92C4.41 5.647 4 6.71 4 8.026v7.947c0 1.318.409 2.38 1.085 3.106.67.72 1.66 1.17 2.948 1.17h8.433c1.29 0 2.278-.45 2.948-1.17.676-.726 1.085-1.788 1.085-3.106V8.026c0-1.318-.409-2.38-1.084-3.106-.67-.72-1.66-1.17-2.948-1.17H8.033c-1.284 0-2.274.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.24 2.262a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0V3.012a.75.75 0 0 1 .75-.75M15.283 2.262a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0V3.012a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.502 15.041a.75.75 0 0 1 .75-.75h17.997a.75.75 0 0 1 0 1.5H3.252a.75.75 0 0 1-.75-.75M2.502 8.998a.75.75 0 0 1 .75-.75H21.25a.75.75 0 0 1 0 1.5H3.252a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGalleryViewOutline;
