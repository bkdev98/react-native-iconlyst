import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseAddBroken = ({
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
      d="m17.736 18.799.001 2.246m0-2.246-.002-2.246m.001 2.246h2.245m-2.245 0-2.247-.001M11.291 14.56c7.301 0 7.301-2.89 7.301-2.89V5.89M3.99 5.89v5.78s0 1.692 3.27 2.487"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.99 11.67v5.78s0 2.89 7.3 2.89M11.29 3c-4.031 0-7.3 1.302-7.3 2.908s3.269 2.908 7.3 2.908c4.033 0 7.302-1.302 7.302-2.908 0-1.073-1.46-2.01-3.633-2.515"
    />
  </Svg>
);
export default IconlystDatabaseAddBroken;
