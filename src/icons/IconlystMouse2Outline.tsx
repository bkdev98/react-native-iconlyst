import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouse2Outline = ({
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
      d="M4.805 9.297C4.804 5.363 8.18 2.25 12.25 2.25c4.067 0 7.445 3.11 7.446 7.045v5.408c.002 3.934-3.376 7.047-7.444 7.047s-7.445-3.11-7.445-7.044zm1.5 0 .002 5.409c0 3.019 2.617 5.544 5.945 5.544s5.946-2.527 5.945-5.547l-.001-5.408c-.001-3.02-2.62-5.545-5.946-5.545-3.329 0-5.946 2.527-5.945 5.547"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.293 7.172a.39.39 0 0 0-.39.39v1.673a.39.39 0 0 0 .78 0V7.562a.39.39 0 0 0-.39-.39m-1.89.39a1.89 1.89 0 0 1 3.78 0v1.673a1.89 1.89 0 0 1-3.78 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 2.25A.75.75 0 0 1 13 3v3.31a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMouse2Outline;
