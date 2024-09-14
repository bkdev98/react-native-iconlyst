import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartCircleBold = ({
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
      d="M11.756 2.831a.293.293 0 0 0-.324-.293C6.71 3.084 3.03 7.1 3.03 11.967c0 .725.09 1.43.248 2.108.039.17.217.265.382.208l7.894-2.707a.3.3 0 0 0 .202-.284zM13.579 2.533a.293.293 0 0 0-.323.294v8.165a.3.3 0 0 0 .3.3h8.118a.293.293 0 0 0 .294-.321 9.5 9.5 0 0 0-8.389-8.438M18.172 19.19a.292.292 0 0 0 .43.066 9.48 9.48 0 0 0 3.353-6.138.292.292 0 0 0-.293-.326h-7.38a.2.2 0 0 0-.167.311zM4.157 15.698a.292.292 0 0 0-.171.403c1.54 3.172 4.789 5.365 8.545 5.365 1.54 0 2.995-.37 4.282-1.023a.292.292 0 0 0 .108-.425l-4.59-6.887a.3.3 0 0 0-.347-.117z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChartCircleBold;
