import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPineappleTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.762 16.223c0-3.47-.008-8.212 4.52-8.212h1.436c4.528 0 4.52 4.742 4.52 8.212 0 6.26-10.476 6.477-10.476 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.188 8.224c.643-1.208 1.74-1.854 2.727-2.17-.358-.244-1.357-.68-2.48-.473.015-.617.29-1.987 1.263-2.537-.811-.186-2.687.204-3.698 1.442-1.011-1.238-2.887-1.628-3.698-1.442.974.55 1.248 1.92 1.264 2.537-1.124-.207-2.122.229-2.481.472.988.317 2.084.963 2.727 2.17M6.762 14.601l1.713 1.295 1.713-1.295 1.713 1.295 1.713-1.295 1.712 1.295 1.713-1.295M7.29 11.025 8.784 12.3l1.494-1.275 1.494 1.275 1.494-1.275M11.025 18.017l1.494 1.038 1.494-1.038 1.494 1.038"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPineappleTwoTone;
