import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpaceDecreaseBulk = ({
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
      d="M16.218 2.5H7.783C4.623 2.5 2.5 4.722 2.5 8.03v7.939c0 3.308 2.123 5.531 5.283 5.531h8.434c3.16 0 5.283-2.223 5.283-5.531V8.03c0-3.308-2.122-5.53-5.282-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.268 8.055-2.744 2.681a.75.75 0 0 1-1.048.001L8.73 8.057a.751.751 0 0 1 1.048-1.075L12 9.152l2.22-2.169a.75.75 0 0 1 1.061.011.75.75 0 0 1-.013 1.061m.013 8.95a.746.746 0 0 1-1.061.011l-2.221-2.169-2.221 2.17a.75.75 0 1 1-1.048-1.073l2.745-2.68a.75.75 0 0 1 1.048 0l2.745 2.68a.75.75 0 0 1 .013 1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpaceDecreaseBulk;
