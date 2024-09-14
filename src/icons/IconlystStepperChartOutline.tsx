import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStepperChartOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.5 3.37a.75.75 0 0 1 .75.75v14c0 .69.56 1.25 1.25 1.25h14a.75.75 0 0 1 0 1.5h-14a2.75 2.75 0 0 1-2.75-2.75v-14a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.75 7.058a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-.75.75H9.75v3.75a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1 0-1.5h3.75v-3.75a.75.75 0 0 1 .75-.75h3.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStepperChartOutline;
