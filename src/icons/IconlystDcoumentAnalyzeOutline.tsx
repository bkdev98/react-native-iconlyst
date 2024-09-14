import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcoumentAnalyzeOutline = ({
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
      d="M8.581 16.38a.75.75 0 0 1-.594-1.207l2.351-3.054a.75.75 0 0 1 1.058-.133l2.089 1.64 1.839-2.374a.75.75 0 0 1 1.186.919l-2.3 2.97a.753.753 0 0 1-1.056.13l-2.088-1.638-1.888 2.456a.75.75 0 0 1-.597.292"
    />
    <Path
      fill={props.color}
      d="M16.25 21.75H8.294a4.5 4.5 0 0 1-4.42-4.6V6.657A4.523 4.523 0 0 1 8.368 2.25h5.668a2.8 2.8 0 0 1 2.02.861l3.79 3.949c.502.52.782 1.217.78 1.94v8.163a4.543 4.543 0 0 1-4.376 4.587m-7.879-18a3.01 3.01 0 0 0-3 2.925v10.488a3 3 0 0 0 2.937 3.086h7.91a3.044 3.044 0 0 0 2.905-3.082V9a1.3 1.3 0 0 0-.362-.9l-3.79-3.95a1.3 1.3 0 0 0-.938-.4H8.368z"
    />
    <Path
      fill={props.color}
      d="M19.812 9.266h-2.739a3.315 3.315 0 0 1-3.3-3.311V3.063a.75.75 0 0 1 1.5 0v2.892a1.81 1.81 0 0 0 1.805 1.81h2.737a.75.75 0 0 1 0 1.5z"
    />
  </Svg>
);
export default IconlystDcoumentAnalyzeOutline;
