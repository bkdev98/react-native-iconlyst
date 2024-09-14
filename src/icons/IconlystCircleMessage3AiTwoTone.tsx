import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleMessage3AiTwoTone = ({
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
      d="M8.042 20.085A9 9 0 1 0 12 3a9 9 0 0 0-8.085 12.958c.516 1.075.022 2.254-.24 3.333-.15.592.442 1.184 1.034 1.034 1.078-.272 2.257-.757 3.333-.24"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.054 13.978-.1-.273A3.76 3.76 0 0 0 7.73 11.48l-.272-.101.272-.101a3.76 3.76 0 0 0 2.222-2.225l.101-.274.101.274a3.76 3.76 0 0 0 2.222 2.225l.273.1-.273.102a3.76 3.76 0 0 0-2.222 2.225zM15.365 15.22a1.77 1.77 0 0 0-1.177-1.178 1.77 1.77 0 0 0 1.177-1.178 1.77 1.77 0 0 0 1.177 1.178 1.77 1.77 0 0 0-1.177 1.178"
    />
  </Svg>
);
export default IconlystCircleMessage3AiTwoTone;
