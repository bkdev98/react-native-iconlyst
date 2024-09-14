import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiSquareAlertOutline = ({
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
      d="M3.676 4.534c.946-1.02 2.295-1.591 3.89-1.591h4.931a.75.75 0 0 1 0 1.5h-4.93c-1.224 0-2.158.428-2.79 1.11-.64.69-1.027 1.7-1.027 2.955v7.565c0 1.26.381 2.267 1.014 2.952.627.677 1.56 1.105 2.803 1.105h8.05c1.224 0 2.159-.426 2.791-1.107.639-.687 1.026-1.694 1.026-2.95v-4.715a.75.75 0 0 1 1.5 0v4.715c0 1.564-.486 2.96-1.427 3.971-.947 1.019-2.296 1.586-3.89 1.586h-8.05c-1.61 0-2.96-.566-3.904-1.587-.937-1.014-1.413-2.41-1.413-3.97V8.508c0-1.563.486-2.96 1.426-3.974"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.645 3.87a1.606 1.606 0 1 0 0 3.212 1.606 1.606 0 0 0 0-3.212m-3.106 1.606a3.106 3.106 0 1 1 6.212 0 3.106 3.106 0 0 1-6.212 0M9.371 15.269a.75.75 0 0 1-.703-.49l-.101-.274a3.01 3.01 0 0 0-1.779-1.782l-.273-.1a.75.75 0 0 1 0-1.407l.273-.101a3.01 3.01 0 0 0 1.779-1.782l.1-.273a.75.75 0 0 1 1.408 0l.101.273a3.01 3.01 0 0 0 1.779 1.782l.273.1a.75.75 0 0 1 0 1.407l-.273.101a3.01 3.01 0 0 0-1.779 1.782l-.101.273a.75.75 0 0 1-.704.49m.95-3.35a4.5 4.5 0 0 1-.95-.95 4.5 4.5 0 0 1-.948.95c.361.268.681.588.948.95.268-.362.587-.682.95-.95M14.682 16.51a.75.75 0 0 1-.718-.531 1.02 1.02 0 0 0-.677-.68.75.75 0 0 1 0-1.434 1.02 1.02 0 0 0 .677-.68.75.75 0 0 1 1.436 0c.099.326.353.58.678.68a.75.75 0 0 1 0 1.435 1.02 1.02 0 0 0-.678.679.75.75 0 0 1-.718.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAiSquareAlertOutline;
