import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartTwoTonecurved = ({
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
      d="M7.483 11.261v6.694M12.037 8.057v9.898M16.516 14.798v3.157"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.3 13.037C2.3 5.735 4.735 3.3 12.037 3.3s9.737 2.435 9.737 9.737-2.435 9.737-9.737 9.737S2.3 20.339 2.3 13.037"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystChartTwoTonecurved;
