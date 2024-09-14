import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRadicalOutline = ({
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
      d="M3.74 3.897C4.725 2.841 6.127 2.25 7.782 2.25h8.435c1.66 0 3.062.59 4.046 1.648.978 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H7.782c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M4.837 4.92C4.16 5.647 3.75 6.71 3.75 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H7.782c-1.284 0-2.273.45-2.945 1.17m6.055 4.483a2.88 2.88 0 0 1 2.772-2.1h2.855a.75.75 0 0 1 0 1.5h-2.855c-.618 0-1.16.412-1.329 1.007l-1.684 5.973c-.331 1.172-1.971 1.232-2.385.085L7.15 12.773a1.23 1.23 0 0 0-.9-.786.75.75 0 0 1 .316-1.466 2.73 2.73 0 0 1 1.995 1.743l.854 2.372zm2.623 2.472a.75.75 0 0 1 1.049.158l.675.916.675-.916a.75.75 0 0 1 1.208.89l-.951 1.29.95 1.288a.75.75 0 0 1-1.207.89l-.675-.915-.675.916a.75.75 0 0 1-1.207-.89l.95-1.29-.95-1.289a.75.75 0 0 1 .158-1.048"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRadicalOutline;
