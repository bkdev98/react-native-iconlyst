import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseCheckBroken = ({
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
      d="m14.01 18.935 1.995 1.993 4.416-4.416M10.88 14.56c7.3 0 7.3-2.89 7.3-2.89V5.89M3.578 5.89v5.78s0 1.79 3.559 2.553"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.578 11.67v5.78s0 2.89 7.301 2.89M13.748 3.233c2.606.444 4.432 1.475 4.432 2.676 0 1.606-3.269 2.908-7.3 2.908-4.033 0-7.302-1.302-7.302-2.908 0-1.52 2.925-2.767 6.653-2.897"
    />
  </Svg>
);
export default IconlystDatabaseCheckBroken;
