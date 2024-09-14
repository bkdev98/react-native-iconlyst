import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownSquareLineBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.974 2.813H8.026C4.721 2.813 2.5 4.936 2.5 8.096v8.434c0 3.159 2.221 5.282 5.526 5.282h7.948c3.305 0 5.526-2.123 5.526-5.282V8.097c0-3.16-2.221-5.284-5.526-5.284"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.75 7.614v4.808l1.76-1.765a.751.751 0 0 1 1.061 1.06l-3.04 3.049a.8.8 0 0 1-.243.163.8.8 0 0 1-.224.045c-.022.002-.04.013-.064.013a.8.8 0 0 1-.29-.06c-.057-.023-.103-.063-.15-.1-.03-.022-.066-.034-.092-.061l-3.038-3.05a.75.75 0 0 1 1.062-1.058l1.758 1.764V7.614a.75.75 0 0 1 1.5 0m1.976 8.65a.75.75 0 0 1 0 1.5h-5.45a.75.75 0 0 1 0-1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownSquareLineBulk;
