import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystErrorDiamondOutline = ({
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
      d="M12.188 21.755a4.64 4.64 0 0 1-3.293-1.46l-4.958-4.958A4.625 4.625 0 0 1 4.08 8.51l4.673-4.672a5.04 5.04 0 0 1 3.386-1.59 4.57 4.57 0 0 1 3.44 1.447l4.958 4.957a4.573 4.573 0 0 1-.142 6.828l-4.672 4.672a5.02 5.02 0 0 1-3.535 1.604m-7.19-7.479 4.957 4.957a3.095 3.095 0 0 0 4.707-.142l4.672-4.672a3.09 3.09 0 0 0 .14-4.707l-4.957-4.957a3.14 3.14 0 0 0-2.326-1.009 3.58 3.58 0 0 0-2.38 1.151L5.14 9.57a3.125 3.125 0 0 0-.142 4.707"
    />
    <Path
      fill={props.color}
      d="M12.236 16.178a.726.726 0 0 1-.75-.72v-.063a.75.75 0 1 1 1.5 0 .777.777 0 0 1-.75.783m0-3.434a.75.75 0 0 1-.75-.75v-3.6a.75.75 0 1 1 1.5 0v3.6a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystErrorDiamondOutline;
