import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcoumentAddOutline = ({
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
      d="M12.07 15.953a.75.75 0 0 1-.75-.75v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5a.75.75 0 1 1 1.5 0v1.5h1.5a.75.75 0 1 1 0 1.5h-1.5v1.5a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M16.248 21.75H8.292a4.513 4.513 0 0 1-4.42-4.6V6.657A4.523 4.523 0 0 1 8.366 2.25h5.668a2.8 2.8 0 0 1 2.02.861l3.794 3.949c.502.52.782 1.217.78 1.94v8.163a4.543 4.543 0 0 1-4.38 4.587m-7.88-18a3.01 3.01 0 0 0-3 2.925v10.488a3 3 0 0 0 2.938 3.086h7.912a3.044 3.044 0 0 0 2.906-3.082V9c0-.336-.13-.658-.362-.9l-3.791-3.95a1.3 1.3 0 0 0-.937-.4z"
    />
    <Path
      fill={props.color}
      d="M19.812 9.266h-2.74a3.314 3.314 0 0 1-3.3-3.311V3.063a.75.75 0 1 1 1.5 0v2.892a1.81 1.81 0 0 0 1.804 1.81h2.738a.75.75 0 1 1 0 1.5z"
    />
  </Svg>
);
export default IconlystDcoumentAddOutline;
