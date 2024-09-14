import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPrinterCloseLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.494 14.565v3.747c0 1.146.93 2.066 2.076 2.066h4.981c1.082 0 1.977-.83 2.057-1.895M5.16 7.023a3.32 3.32 0 0 0-2.049 3.06v3.989c0 1.824 1.476 3.3 3.3 3.3H7.46M12.692 14.565H6.627M3 4.867l15.964 15.964M16.617 10.334h-1.691M10.737 6.783h6.954a3.31 3.31 0 0 1 3.31 3.302v3.989c0 .984-.439 1.869-1.127 2.468"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.691 4.36A2.07 2.07 0 0 1 9.57 3.17h4.983c1.136 0 2.066.921 2.066 2.067v1.547"
    />
  </Svg>
);
export default IconlystPrinterCloseLight;
