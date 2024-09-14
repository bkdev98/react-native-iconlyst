import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlus1Outline = ({
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
      d="M12.617 8.016a.75.75 0 0 1 .134.428v2.548H15.3a.75.75 0 0 1 0 1.5H12.75v2.545a.75.75 0 0 1-1.5 0v-2.545h-2.55a.75.75 0 1 1 0-1.5h2.55V8.444a.75.75 0 0 1 1.366-.428"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.74 3.647C4.727 2.591 6.128 2 7.784 2h8.435c1.66 0 3.062.59 4.045 1.648.979 1.05 1.487 2.501 1.487 4.128v7.948c0 1.627-.508 3.078-1.487 4.128-.984 1.057-2.387 1.648-4.046 1.648H7.783c-1.659 0-3.062-.59-4.046-1.648-.978-1.05-1.487-2.5-1.487-4.128V7.776c0-1.628.511-3.078 1.49-4.129M4.839 4.67C4.16 5.397 3.75 6.46 3.75 7.776v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.675-.726 1.084-1.789 1.084-3.106V7.776c0-1.317-.409-2.38-1.084-3.106-.67-.72-1.66-1.17-2.948-1.17H7.783c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlus1Outline;
