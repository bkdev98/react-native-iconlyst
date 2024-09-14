import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudSunnyBulk = ({
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
      d="M20.046 11.978a.21.21 0 0 1-.181-.178c-.288-1.862-1.813-4.148-4.735-4.148s-4.446 2.286-4.734 4.148a.21.21 0 0 1-.18.178c-2.066.286-3.46 1.887-3.46 4.074 0 1.624.954 3.1 2.44 3.761a4.4 4.4 0 0 0 1.648.34h8.567a4.7 4.7 0 0 0 1.67-.336 4.14 4.14 0 0 0 2.422-3.765c0-2.187-1.394-3.787-3.457-4.074"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.188 10.028c.12-.454-.17-.924-.624-1.043a.849.849 0 1 0-.433 1.644l.037.009a.8.8 0 0 0 .214.029.84.84 0 0 0 .806-.64M10.428 5.527q.111.03.221.03a.85.85 0 0 0 .82-.63l.005-.02a.84.84 0 0 0-.603-1.032.86.86 0 0 0-1.044.611.85.85 0 0 0 .601 1.041M2.804 14.262l-.018.01a.843.843 0 0 0-.297 1.158.86.86 0 0 0 1.171.301.851.851 0 0 0-.856-1.469M5.468 6.407a.85.85 0 0 0 .74-1.266l-.011-.02a.84.84 0 0 0-1.151-.316.86.86 0 0 0-.32 1.168.85.85 0 0 0 .742.434M8.925 10.751a.43.43 0 0 0 .27-.267c.358-1.038.99-2.082 1.915-2.882.11-.095.094-.272-.04-.329a4 4 0 0 0-.691-.226c-2.46-.58-4.95.95-5.53 3.42a4.54 4.54 0 0 0 .495 3.34c.083.14.29.112.351-.04a5.26 5.26 0 0 1 3.23-3.016"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudSunnyBulk;
