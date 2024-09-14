import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRight3Boldcurved = ({
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
      d="M15.237 6.957c-.776-.32-1.642-.577-2.174-.043-.444.446-.697 2.173-.762 4.085H4.075a1 1 0 1 0 0 2h8.227c.065 1.908.318 3.63.762 4.073.234.234.531.322.854.322.453 0 .955-.174 1.394-.356 1.571-.65 6.112-3.396 6.112-5.046 0-1.703-4.747-4.438-6.187-5.035"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowRight3Boldcurved;
