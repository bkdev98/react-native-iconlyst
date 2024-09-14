import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoopDirectionRepeatCircleHorizontalOutline = ({
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
      d="M12.65 3.14a.75.75 0 0 1 0 1.061l-2.484 2.484 2.485 2.485a.75.75 0 0 1-1.06 1.06L8.574 7.217a.75.75 0 0 1 0-1.06L11.59 3.14a.75.75 0 0 1 1.06 0M11.487 13.77a.75.75 0 0 1 1.06 0l3.016 3.014a.75.75 0 0 1 0 1.06l-3.015 3.016a.75.75 0 0 1-1.06-1.061l2.484-2.485-2.485-2.484a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.375 6.686a.75.75 0 0 1 .75-.75h6.564a6.06 6.06 0 0 1 3.016 11.319.75.75 0 0 1-.748-1.3 4.56 4.56 0 0 0-2.268-8.519H9.125a.75.75 0 0 1-.75-.75M6.173 7.076a.75.75 0 0 1-.247 1.032 4.56 4.56 0 0 0 2.384 8.45h6.635a.75.75 0 1 1 0 1.5H8.31A6.06 6.06 0 0 1 5.14 6.83a.75.75 0 0 1 1.033.246"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoopDirectionRepeatCircleHorizontalOutline;
