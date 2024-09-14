import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockTwoTonecurved = ({
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
      d="M16.47 9.8V7.65a4.561 4.561 0 0 0-9.12-.02V9.8M11.91 14.552v2.221"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.91 9.22c-5.745 0-7.66 1.568-7.66 6.271 0 4.704 1.915 6.272 7.66 6.272s7.661-1.568 7.661-6.272c0-4.703-1.916-6.27-7.66-6.27"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLockTwoTonecurved;
