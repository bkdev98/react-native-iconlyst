import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotebookSignalsOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.064 7.42a.75.75 0 0 1 .75-.75h3.06a.75.75 0 0 1 0 1.5h-3.06a.75.75 0 0 1-.75-.75m0 4.698a.75.75 0 0 1 .75-.75h3.06a.75.75 0 0 1 0 1.5h-3.06a.75.75 0 0 1-.75-.75m0 4.698a.75.75 0 0 1 .75-.75h3.06a.75.75 0 0 1 0 1.5h-3.06a.75.75 0 0 1-.75-.75M17.897 12.052a.75.75 0 0 1 .75.75v4.426a.75.75 0 0 1-1.5 0v-4.426a.75.75 0 0 1 .75-.75M12.548 12.304a.75.75 0 0 1 .75.75v4.173a.75.75 0 0 1-1.5 0v-4.173a.75.75 0 0 1 .75-.75M15.223 14.637a.75.75 0 0 1 .75.75v1.84a.75.75 0 0 1-1.5 0v-1.84a.75.75 0 0 1 .75-.75M9.795 14.637a.75.75 0 0 1 .75.75v1.84a.75.75 0 0 1-1.5 0v-1.84a.75.75 0 0 1 .75-.75M18.41 6.481a.75.75 0 0 1 .034 1.06l-2.61 2.788a.75.75 0 0 1-.955.116l-2.515-1.633-2.238 2.406a.75.75 0 0 1-1.098-1.022l2.667-2.867a.75.75 0 0 1 .958-.118l2.516 1.634 2.18-2.329a.75.75 0 0 1 1.06-.035"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.157 3.848A3.32 3.32 0 0 0 5.835 7.17v9.957a3.32 3.32 0 0 0 3.322 3.322h7.74a3.32 3.32 0 0 0 3.322-3.322V7.17a3.32 3.32 0 0 0-3.322-3.322zm-4.8 3.322c0-2.651 2.15-4.8 4.8-4.8h7.74c2.651 0 4.8 2.149 4.8 4.8v9.957c0 2.651-2.149 4.8-4.8 4.8h-7.74c-2.65 0-4.8-2.149-4.8-4.8z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNotebookSignalsOutline;
