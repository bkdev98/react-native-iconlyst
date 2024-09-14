import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseRefreshBroken = ({
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
      d="M3.731 15.45v2.073s0 2.917 7.37 2.917M18.385 10.898V5.854M3.731 5.854v5.834s0 2.917 7.37 2.917M14.935 15.383a3.21 3.21 0 0 1 5.334 2.407M19.18 20.196a3.21 3.21 0 0 1-5.334-2.407"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11.066 3C7.019 3 3.738 4.323 3.738 5.956c0 1.632 3.28 2.956 7.328 2.956 4.046 0 7.327-1.324 7.327-2.956 0-.983-1.19-1.854-3.02-2.391"
    />
  </Svg>
);
export default IconlystDatabaseRefreshBroken;
