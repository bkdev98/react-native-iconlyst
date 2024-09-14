import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSandwichHotdogBulk = ({
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
      d="M19.604 8.71 8.71 19.607a3.054 3.054 0 0 1-4.32-4.318L15.286 4.393a3.054 3.054 0 1 1 4.32 4.318"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M14.833 2.696c.238.109.277.42.092.604L3.298 14.927c-.185.185-.495.145-.603-.093A4.96 4.96 0 0 1 3.7 9.275l5.572-5.572a4.95 4.95 0 0 1 5.56-1.007M9.161 21.304c-.237-.109-.277-.42-.092-.604L20.698 9.071c.184-.184.494-.145.603.093a4.95 4.95 0 0 1-1.005 5.562L14.724 20.3a4.96 4.96 0 0 1-5.563 1.005"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.542 7.84a.75.75 0 0 1 .617.863l-.003.02c-.039.234-.09.545-.222.874-.14.352-.36.7-.712 1.05-.35.35-.697.57-1.048.709-.327.13-.637.18-.868.219l-.023.004c-.25.04-.415.07-.581.137a1.6 1.6 0 0 0-.547.38 1.6 1.6 0 0 0-.38.547c-.067.167-.097.333-.139.583q0 .01-.003.02c-.039.234-.09.545-.222.874-.141.351-.361.699-.712 1.05a3.05 3.05 0 0 1-1.117.736c-.303.112-.602.162-.823.2l-.093.015a.75.75 0 1 1-.257-1.478l.113-.02c.227-.038.378-.064.54-.124s.35-.163.576-.39c.215-.214.318-.393.38-.547.067-.167.097-.332.139-.583q0-.01.003-.02c.039-.234.09-.545.222-.873.141-.352.361-.7.712-1.051a3.1 3.1 0 0 1 1.051-.712c.33-.132.642-.183.875-.222q.01 0 .02-.003c.25-.04.415-.07.58-.136.153-.06.329-.162.541-.375a1.6 1.6 0 0 0 .38-.547c.067-.167.097-.332.139-.583a.75.75 0 0 1 .862-.617"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSandwichHotdogBulk;
