import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFloppyDiskSave3Outline = ({
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
      d="M5.087 4.92C4.41 5.646 4 6.709 4 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.435c1.29 0 2.278-.45 2.948-1.17.676-.726 1.085-1.789 1.085-3.106V10.08c0-.43-.166-.845-.465-1.155L15.56 4.263a1.67 1.67 0 0 0-1.205-.513H8.032c-1.284 0-2.273.45-2.945 1.17M3.99 3.897C4.975 2.841 6.377 2.25 8.032 2.25h6.323c.863 0 1.689.352 2.287.974l4.474 4.661c.568.59.884 1.377.884 2.195v5.894c0 1.627-.508 3.078-1.487 4.128-.984 1.057-2.386 1.648-4.046 1.648H8.032c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.079 1.49-4.129"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.475 15.086a2.471 2.471 0 1 1 4.942 0 2.471 2.471 0 0 1-4.942 0m2.47-.97a.971.971 0 1 0 0 1.942.971.971 0 0 0 0-1.943M6.475 7.479a.75.75 0 0 1 .75-.75h6.885a.75.75 0 1 1 0 1.5H7.225a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFloppyDiskSave3Outline;
