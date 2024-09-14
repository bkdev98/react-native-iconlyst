import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMachineLight = ({
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
      d="M13.392 3.145c2.582.528 4.67 2.605 5.21 5.188.7 3.374-1.136 6.485-3.96 7.679v2.244a2.677 2.677 0 0 1-2.668 2.669 2.677 2.677 0 0 1-2.669-2.67V16a6.75 6.75 0 0 1-3.754-4.017M9.296 16.016h5.343"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.045 4.656-.002-.004a.7.7 0 0 1-.101-.363l.007-.418a.66.66 0 0 0-.27-.547 3.3 3.3 0 0 0-.598-.344.66.66 0 0 0-.609.04l-.358.214a.7.7 0 0 1-.366.094h-.004a.7.7 0 0 1-.365-.094l-.358-.215a.66.66 0 0 0-.61-.04q-.316.143-.596.345a.67.67 0 0 0-.27.548l.007.417a.7.7 0 0 1-.102.364l-.002.004a.7.7 0 0 1-.263.268l-.366.203a.68.68 0 0 0-.34.523q-.034.33 0 .661a.67.67 0 0 0 .34.522l.365.202c.113.063.2.159.265.27l.002.004a.7.7 0 0 1 .101.363l-.007.417a.66.66 0 0 0 .271.549q.28.203.597.344a.66.66 0 0 0 .608-.04l.358-.215a.7.7 0 0 1 .366-.093h.005c.128 0 .254.027.364.093l.358.215c.185.11.414.127.61.04q.317-.142.597-.345a.67.67 0 0 0 .27-.548l-.007-.417a.7.7 0 0 1 .102-.363l.002-.005a.7.7 0 0 1 .264-.269l.365-.202a.68.68 0 0 0 .34-.523 3.3 3.3 0 0 0 0-.661.67.67 0 0 0-.34-.522l-.365-.202a.7.7 0 0 1-.265-.27"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.752 5.961v-.049m-.006-.144a.213.213 0 1 0 .003.425.213.213 0 0 0-.003-.425M13.505 8.729v.739m0 2.958v.74m-1.923-3.328.638.37m2.57 1.479.637.37m-3.845 0 .638-.37m2.57-1.48.637-.37m-.876.064a1.48 1.48 0 1 1-2.094 2.092A1.48 1.48 0 0 1 14.55 9.9"
    />
  </Svg>
);
export default IconlystMachineLight;
