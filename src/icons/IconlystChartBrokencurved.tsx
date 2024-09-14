import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartBrokencurved = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.696 10.759v6.694M12.25 7.555v9.898M16.729 14.296v3.157M12.25 22.272c-7.302 0-9.737-2.435-9.737-9.737s2.435-9.737 9.737-9.737 9.737 2.435 9.737 9.737c0 5.698-1.482 8.432-5.603 9.359"
    />
  </Svg>
);
export default IconlystChartBrokencurved;
