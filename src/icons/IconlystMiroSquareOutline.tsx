import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMiroSquareOutline = ({
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
      d="M13.547 6.532a.75.75 0 0 1 .643-.364h1.56a.75.75 0 0 1 .452.152l2.405 1.822a.75.75 0 0 1 .268.806l-2.405 8.341a.75.75 0 0 1-.72.542h-1.56a.75.75 0 0 1-.741-.867l1.204-7.574-1.126-2.12a.75.75 0 0 1 .02-.738m1.89 1.136.658 1.24a.75.75 0 0 1 .079.47l-1.106 6.953h.117l2.106-7.304-1.794-1.359zM5.676 6.512a.75.75 0 0 1 .63-.344h1.497a.75.75 0 0 1 .544.234l2.7 2.848a.75.75 0 0 1 .16.776l-2.7 7.315a.75.75 0 0 1-.704.49H6.307a.75.75 0 0 1-.733-.91l1.443-6.617-1.394-3.077a.75.75 0 0 1 .053-.715M7.47 7.668l1.016 2.244a.75.75 0 0 1 .05.47l-1.298 5.95h.042l2.358-6.388L7.48 7.668z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.587 6.53a.75.75 0 0 1 .642-.362h1.485a.75.75 0 0 1 .52.21l2.383 2.291a.75.75 0 0 1 .198.758L12.432 17.3a.75.75 0 0 1-.718.532h-1.485a.75.75 0 0 1-.736-.899l1.433-7.072-1.362-2.593a.75.75 0 0 1 .023-.737m1.94 1.25.851 1.62a.75.75 0 0 1 .071.497l-1.303 6.434h.011l2.089-6.899z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMiroSquareOutline;
