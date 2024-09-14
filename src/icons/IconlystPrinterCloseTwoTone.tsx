import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPrinterCloseTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.994 14.565v3.747c0 1.146.93 2.066 2.076 2.066h4.981c1.082 0 1.977-.83 2.057-1.895M5.66 7.023a3.32 3.32 0 0 0-2.049 3.06v3.989c0 1.824 1.476 3.3 3.3 3.3H7.96M13.192 14.565H7.127M3.5 4.867l15.964 15.964"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.117 10.334h-1.691"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.237 6.783h6.954a3.31 3.31 0 0 1 3.31 3.302v3.989c0 .984-.439 1.869-1.127 2.468"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.191 4.36a2.07 2.07 0 0 1 1.878-1.19h4.983c1.136 0 2.066.921 2.066 2.067v1.547"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPrinterCloseTwoTone;
