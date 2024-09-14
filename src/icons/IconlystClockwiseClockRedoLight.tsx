import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClockwiseClockRedoLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.158 7.566c-2.105-3.708-6.594-5.512-10.774-4.07-4.69 1.624-7.185 6.746-5.562 11.436 1.614 4.7 6.735 7.196 11.435 5.572a8.96 8.96 0 0 0 5.733-6.093"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.4 4.271v3.3h-3.28M15.15 14.57l-3.173-1.898V8.574"
    />
  </Svg>
);
export default IconlystClockwiseClockRedoLight;
