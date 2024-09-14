import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClockDash4Outline = ({
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
      d="M15.147 14.665a.75.75 0 0 1-.384-.106l-2.8-1.671a.75.75 0 0 1-.365-.644V8.633a.75.75 0 0 1 1.5 0v3.185l2.432 1.453a.75.75 0 0 1-.385 1.394zM5.187 7.383a.75.75 0 0 1-.6-1.194A9.8 9.8 0 0 1 6.16 4.51a.75.75 0 1 1 .967 1.145c-.498.42-.944.897-1.329 1.422a.75.75 0 0 1-.611.307M12.42 21.75c-.718-.001-1.434-.08-2.135-.236a.75.75 0 1 1 .326-1.465 8.26 8.26 0 0 0 6.9-1.553.75.75 0 0 1 .926 1.18 9.7 9.7 0 0 1-6.017 2.073M7.26 20.11a.75.75 0 0 1-.426-.132 9.8 9.8 0 0 1-3.38-4.1.75.75 0 0 1 1.374-.606 8.3 8.3 0 0 0 2.86 3.47.75.75 0 0 1-.428 1.366zM3.437 13.33a.75.75 0 0 1-.747-.7 9.7 9.7 0 0 1 .324-3.286.75.75 0 1 1 1.447.4 8.2 8.2 0 0 0-.275 2.78.75.75 0 0 1-.694.8zM20.05 17.473a.75.75 0 0 1-.637-1.145 8.245 8.245 0 0 0-7.337-12.572.73.73 0 0 1-.777-.72.747.747 0 0 1 .721-.778 9.735 9.735 0 0 1 8.67 14.86.75.75 0 0 1-.64.355"
    />
  </Svg>
);
export default IconlystClockDash4Outline;
