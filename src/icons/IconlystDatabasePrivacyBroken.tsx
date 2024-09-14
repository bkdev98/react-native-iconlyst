import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabasePrivacyBroken = ({
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
      d="M11.378 3.1c-4.047 0-7.327 1.323-7.327 2.955s3.28 2.956 7.327 2.956 7.327-1.323 7.327-2.956c0-1.1-1.492-2.061-3.706-2.57"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.05 15.623v2.107s0 2.925 7.393 2.925M18.706 11.046v-5.02M4.05 6.025v5.852s0 2.727 6.652 2.916M19.925 17.501c0 2.495-2.987 3.4-2.987 3.4s-2.987-.905-2.987-3.4-.11-2.416.13-2.655c.24-.24 2.465-1.016 2.857-1.016s2.855 1.016 2.855 1.016"
    />
  </Svg>
);
export default IconlystDatabasePrivacyBroken;
