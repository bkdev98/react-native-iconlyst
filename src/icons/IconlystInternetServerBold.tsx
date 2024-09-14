import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInternetServerBold = ({
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
      d="M12.089 20.894a.83.83 0 0 1-.85-.85c0-.486.365-.85.85-.85.483 0 .85.364.85.85 0 .485-.367.85-.85.85M9.122 9.92H6.125a.707.707 0 1 1 0-1.414h2.998C9.256 5.483 10.237 2.632 12 2.632s2.745 2.851 2.877 5.875h2.998a.707.707 0 1 1 0 1.414h-2.998c-.133 3.024-1.115 5.876-2.878 5.876S9.256 12.945 9.124 9.92m9.166 9.373h-3.98a2.29 2.29 0 0 0-1.47-1.471v-1.049c3.803-.419 6.77-3.648 6.77-7.559 0-4.197-3.414-7.61-7.61-7.61s-7.608 3.413-7.608 7.61c0 3.973 3.06 7.238 6.948 7.576v1.032c-.7.23-1.24.77-1.47 1.47h-3.98a.75.75 0 0 0 0 1.5h3.98a2.31 2.31 0 0 0 2.22 1.6 2.31 2.31 0 0 0 2.22-1.6h3.98a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 4.046c-.398 0-1.317 1.569-1.453 4.462h2.906C13.317 5.615 12.398 4.046 12 4.046M13.453 9.922h-2.906c.135 2.892 1.054 4.46 1.452 4.46.399 0 1.317-1.568 1.454-4.46"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInternetServerBold;
