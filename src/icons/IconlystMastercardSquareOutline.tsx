import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMastercardSquareOutline = ({
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
      d="M3.74 3.897C4.725 2.841 6.127 2.25 7.782 2.25h8.435c1.66 0 3.062.59 4.046 1.648.978 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H7.782c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M4.837 4.92C4.16 5.647 3.75 6.71 3.75 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H7.782c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.783 9.969a2.03 2.03 0 0 0-2.033 2.025c0 1.119.914 2.033 2.033 2.033.661 0 1.25-.32 1.614-.813l.007-.009a2.016 2.016 0 0 0-.003-2.427 2.01 2.01 0 0 0-1.618-.81M6.25 11.994a3.531 3.531 0 0 1 6.35-2.118v.001a3.516 3.516 0 0 1 0 4.234 3.5 3.5 0 0 1-2.817 1.416 3.54 3.54 0 0 1-3.533-3.533"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.225 9.969c-.664 0-1.254.316-1.626.81a.75.75 0 0 1-1.198-.903 3.53 3.53 0 0 1 2.824-1.407 3.524 3.524 0 0 1 3.525 3.525 3.524 3.524 0 0 1-3.525 3.525c-1.152 0-2.18-.551-2.824-1.407a.75.75 0 0 1 1.198-.903c.372.494.962.81 1.626.81a2.024 2.024 0 1 0 0-4.05"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMastercardSquareOutline;
