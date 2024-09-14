import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConfoundedBulk = ({
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
      d="M12.5 2.5C7.261 2.5 3 6.762 3 12s4.261 9.5 9.5 9.5S22 17.238 22 12s-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.109 10.329a.75.75 0 1 1-.795 1.27l-1.787-1.117a.75.75 0 0 1 0-1.273l1.788-1.112a.75.75 0 0 1 .793 1.273l-.767.478zM16.745 16.253a.75.75 0 0 1-1.06-.032l-.673-.716-.746.736a.7.7 0 0 1-.534.215.75.75 0 0 1-.53-.226l-.702-.722-.701.722a.75.75 0 0 1-.53.226h-.008a.75.75 0 0 1-.526-.215l-.746-.735-.67.713a.75.75 0 0 1-1.061.034.75.75 0 0 1-.033-1.06l1.197-1.274a.75.75 0 0 1 .532-.237.82.82 0 0 1 .54.216l.756.745.712-.734a.75.75 0 0 1 1.075 0l.714.733.755-.743a.8.8 0 0 1 .54-.216.75.75 0 0 1 .533.236l1.198 1.274a.75.75 0 0 1-.032 1.06M7.89 10.329l.768-.48-.767-.479a.75.75 0 1 1 .793-1.273l1.788 1.112a.75.75 0 0 1 0 1.273L8.686 11.6a.752.752 0 0 1-1.033-.237.75.75 0 0 1 .238-1.034"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystConfoundedBulk;
