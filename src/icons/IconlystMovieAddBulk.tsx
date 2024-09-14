import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieAddBulk = ({
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
      d="M21.05 7.78v8.45c0 3.15-2.03 5.27-5.04 5.27H8c-3.02 0-5.05-2.12-5.05-5.27V7.78c0-.36.03-.71.08-1.05.4-2.54 2.26-4.2 4.89-4.23h8.16c2.63.03 4.49 1.68 4.89 4.23.05.34.08.69.08 1.05"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.92 2.5v4.23H3.03c-.05.34-.08.69-.08 1.05v.45h18.1v-.45c0-.36-.03-.71-.08-1.05h-4.89V2.5h-1.5v4.23H9.42V2.5zM14.477 15.057h-1.73v1.73a.75.75 0 1 1-1.5 0v-1.73h-1.73a.75.75 0 0 1 0-1.5h1.73v-1.729a.749.749 0 1 1 1.5 0v1.73h1.73a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMovieAddBulk;
