import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCopyrightOutline = ({
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
      d="M15.517 9.594a.75.75 0 0 1-1.06 0 3.05 3.05 0 1 0 0 4.313.75.75 0 0 1 1.061 1.06 4.55 4.55 0 0 1-6.435 0 4.55 4.55 0 1 1 6.434-6.433.75.75 0 0 1 0 1.06"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.74 3.647C4.725 2.591 6.127 2 7.782 2h8.435c1.659 0 3.062.591 4.046 1.648.978 1.05 1.487 2.501 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.984 1.057-2.387 1.648-4.047 1.648H7.782c-1.659 0-3.062-.591-4.045-1.648-.98-1.051-1.487-2.501-1.487-4.128V7.776c0-1.628.511-3.078 1.49-4.129M4.837 4.67C4.16 5.397 3.75 6.46 3.75 7.776v7.948c0 1.317.41 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.289 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V7.776c0-1.317-.41-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H7.782c-1.284 0-2.273.449-2.945 1.17"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCopyrightOutline;
