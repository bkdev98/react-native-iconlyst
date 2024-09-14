import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieCloseBulk = ({
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
      d="M21.885 7.78v8.45c0 3.15-2.03 5.27-5.04 5.27h-8.01c-3.02 0-5.05-2.12-5.05-5.27V7.78c0-.36.03-.71.08-1.05.4-2.54 2.26-4.2 4.89-4.23h8.16c2.63.03 4.49 1.68 4.89 4.23.05.34.08.69.08 1.05"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.755 2.5v4.23h-4.89c-.05.34-.08.69-.08 1.05v.45h18.1v-.45c0-.36-.03-.71-.08-1.05h-4.89V2.5h-1.5v4.23h-5.16V2.5zM15.118 16.588a.75.75 0 0 0 0-1.061l-1.224-1.225 1.224-1.224a.751.751 0 0 0-1.062-1.061l-1.222 1.224-1.223-1.224a.75.75 0 1 0-1.061 1.06l1.224 1.225-1.224 1.225a.75.75 0 1 0 1.06 1.06l1.224-1.223 1.222 1.224a.75.75 0 0 0 1.062 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMovieCloseBulk;