import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConfoundedBold = ({
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
      d="M16.608 10.33a.75.75 0 1 1-.795 1.271l-1.787-1.118a.75.75 0 0 1 .001-1.272l1.787-1.112a.75.75 0 0 1 .793 1.273l-.767.478zm-.364 5.924a.75.75 0 0 1-1.06-.032l-.673-.715-.746.735a.7.7 0 0 1-.534.216.75.75 0 0 1-.529-.227l-.703-.721-.701.721a.75.75 0 0 1-.53.227h-.008a.75.75 0 0 1-.526-.216l-.746-.735-.67.714a.75.75 0 0 1-1.061.034.75.75 0 0 1-.033-1.06l1.197-1.274a.75.75 0 0 1 .532-.237.82.82 0 0 1 .541.216l.755.744.712-.733a.75.75 0 0 1 1.075 0l.714.733.755-.744a.8.8 0 0 1 .541-.216.75.75 0 0 1 .532.236l1.198 1.274a.75.75 0 0 1-.032 1.06M7.39 10.33l.768-.48-.767-.478a.75.75 0 1 1 .793-1.273l1.787 1.112a.75.75 0 0 1 .001 1.272l-1.787 1.118a.752.752 0 0 1-1.033-.237.75.75 0 0 1 .238-1.034M12 2.5c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystConfoundedBold;
