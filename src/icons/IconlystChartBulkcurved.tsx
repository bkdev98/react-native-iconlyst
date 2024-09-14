import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartBulkcurved = ({
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
      d="M12.25 2.298c-7.56 0-10.237 2.678-10.237 10.237S4.69 22.772 12.25 22.772c7.558 0 10.237-2.678 10.237-10.237S19.807 2.298 12.25 2.298"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.729 18.202a.75.75 0 0 0 .75-.75v-3.157a.75.75 0 0 0-1.5 0v3.157c0 .414.336.75.75.75M12.25 18.202a.75.75 0 0 0 .75-.75V7.554a.75.75 0 1 0-1.5 0v9.898c0 .414.336.75.75.75M7.696 18.202a.75.75 0 0 0 .75-.75v-6.694a.75.75 0 0 0-1.5 0v6.694c0 .414.336.75.75.75"
    />
  </Svg>
);
export default IconlystChartBulkcurved;
