import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowBold = ({
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
      d="M16.5 8.255h-2.625c-.62 0-1.125.507-1.125 1.13v1.87H15a.75.75 0 0 1 0 1.5h-2.25v1.5c0 .803-.312 1.557-.88 2.12a3.03 3.03 0 0 1-2.12.88c-.786 0-1.559-.32-2.12-.88a2.97 2.97 0 0 1-.88-2.12c0-.803.312-1.556.88-2.122a3.03 3.03 0 0 1 2.12-.878h1.5v-1.87a2.63 2.63 0 0 1 2.625-2.63H16.5a.75.75 0 0 1 0 1.5M12 2.505c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.688 13.195a1.5 1.5 0 0 0-.438 1.06c0 .401.155.777.438 1.058.564.561 1.56.561 2.123 0a1.48 1.48 0 0 0 .44-1.058v-1.5h-1.5c-.395 0-.782.16-1.063.44"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlowBold;
