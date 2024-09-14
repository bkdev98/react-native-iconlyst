import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaylistOutline = ({
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
      d="M6.358 4.73A2.36 2.36 0 0 0 4 7.088v9.824a2.36 2.36 0 0 0 2.358 2.358h5.953a2.36 2.36 0 0 0 2.358-2.358V7.088a2.36 2.36 0 0 0-2.358-2.358zM2.5 7.088A3.86 3.86 0 0 1 6.358 3.23h5.953a3.86 3.86 0 0 1 3.858 3.858v9.824a3.86 3.86 0 0 1-3.858 3.858H6.358A3.86 3.86 0 0 1 2.5 16.912zM21.25 8.172a.75.75 0 0 1 .75.75v6.155a.75.75 0 0 1-1.5 0V8.922a.75.75 0 0 1 .75-.75M18.332 5.793a.75.75 0 0 1 .75.75v10.915a.75.75 0 0 1-1.5 0V6.543a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.734 12.752a.98.98 0 1 0 0 1.96.98.98 0 0 0 0-1.96m-2.48.98a2.48 2.48 0 1 1 4.96 0 2.48 2.48 0 0 1-4.96 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.165 8.268v-.002l-.002-.003.007.017q.013.028.045.089c.043.08.112.193.207.31.193.236.468.461.85.539a.75.75 0 1 1-.297 1.47 2.8 2.8 0 0 1-.76-.27v3.313a.75.75 0 1 1-1.5 0V8.537a.75.75 0 0 1 1.448-.274z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaylistOutline;
