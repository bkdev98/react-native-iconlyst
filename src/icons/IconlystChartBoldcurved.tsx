import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartBoldcurved = ({
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
      d="M17.479 17.453a.75.75 0 0 1-1.5 0v-3.157a.75.75 0 0 1 1.5 0zm-4.48 0a.75.75 0 0 1-1.5 0V7.555a.75.75 0 1 1 1.5 0zm-4.553 0a.75.75 0 0 1-1.5 0v-6.694a.75.75 0 0 1 1.5 0zM12.25 2.298c-7.56 0-10.237 2.678-10.237 10.237S4.69 22.772 12.25 22.772c7.558 0 10.237-2.678 10.237-10.237S19.807 2.298 12.25 2.298"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChartBoldcurved;
