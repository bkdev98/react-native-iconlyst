import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoinSwapOutline = ({
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
      d="M2.502 16.99a4.76 4.76 0 1 1 9.519 0 4.76 4.76 0 0 1-9.52 0m4.76-3.26a3.26 3.26 0 1 0 0 6.52 3.26 3.26 0 0 0 0-6.52M12.477 7.01a4.76 4.76 0 1 1 9.52.001 4.76 4.76 0 0 1-9.52-.001m4.76-3.26a3.26 3.26 0 1 0 0 6.52 3.26 3.26 0 0 0 0-6.52M7.515 3.889a4.646 4.646 0 0 0-3.513 4.504.75.75 0 1 1-1.5 0A6.144 6.144 0 0 1 8.645 2.25a.75.75 0 0 1 .703 1.011l-.64 1.723a.75.75 0 0 1-1.406-.522zM21.247 14.795a.75.75 0 0 1 .75.75 6.144 6.144 0 0 1-6.143 6.143.75.75 0 0 1-.703-1.01l.64-1.724a.75.75 0 0 1 1.406.522l-.213.574a4.646 4.646 0 0 0 3.513-4.505.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCoinSwapOutline;
