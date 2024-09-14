import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseHideBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.36 19.646-4.699-.002M11.167 14.965c7.526 0 7.526-2.98 7.526-2.98V6.028M3.64 6.027v5.959s0 1.864 3.728 2.643"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.64 11.986v5.959s0 2.98 7.527 2.98M11.167 3.049c-4.157 0-7.526 1.342-7.526 2.998s3.37 2.998 7.526 2.998c4.157 0 7.526-1.342 7.526-2.998 0-1.185-1.725-2.21-4.23-2.696"
    />
  </Svg>
);
export default IconlystDatabaseHideBroken;
