import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConfoundedOutline = ({
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
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22 12c0 5.384-4.365 9.75-9.75 9.75S2.5 17.384 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.401 8.338a.75.75 0 0 1 1.033-.24l1.788 1.112a.75.75 0 0 1 .001 1.272L8.436 11.6a.75.75 0 0 1-.796-1.271l.769-.48-.767-.478a.75.75 0 0 1-.24-1.033M17.098 8.338a.75.75 0 0 1-.24 1.033l-.767.477.768.48a.75.75 0 1 1-.796 1.272l-1.787-1.118a.75.75 0 0 1 .002-1.272l1.787-1.112a.75.75 0 0 1 1.033.24M9.703 13.684a.75.75 0 0 1 .54.216l.756.744.712-.733a.75.75 0 0 1 1.076 0l.713.733.755-.745a.75.75 0 0 1 1.073.021l1.198 1.275a.75.75 0 0 1-1.093 1.027l-.672-.715-.746.735a.75.75 0 0 1-1.064-.01l-.702-.722-.7.72a.75.75 0 0 1-1.065.012l-.746-.735-.67.715a.75.75 0 0 1-1.094-1.027L9.17 13.92a.75.75 0 0 1 .532-.236"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystConfoundedOutline;
