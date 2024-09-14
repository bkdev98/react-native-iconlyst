import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseSettingBroken = ({
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
      strokeWidth={1.5}
      d="M11.066 3C7.019 3 3.738 4.323 3.738 5.956c0 1.632 3.28 2.956 7.328 2.956 4.046 0 7.327-1.324 7.327-2.956 0-.983-1.19-1.854-3.02-2.391"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.738 15.533v1.988s0 2.917 7.37 2.917M18.392 10.896V5.852M3.738 5.852v5.834s0 2.917 7.37 2.917M17.288 14.13v1.146m0 0a2.289 2.289 0 1 0-.001 4.577 2.289 2.289 0 0 0 .001-4.577m0 4.579v1.144m-2.973-5.15.99.572m3.965 2.29.99.571m-5.946 0 .992-.572m3.964-2.288.99-.572"
    />
  </Svg>
);
export default IconlystDatabaseSettingBroken;
