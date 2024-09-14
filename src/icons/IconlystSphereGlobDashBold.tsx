import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSphereGlobDashBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.231 8.589c-1.379.112-2.651.337-3.779.667a.75.75 0 1 0 .421 1.439c1.031-.301 2.202-.507 3.48-.612a.75.75 0 1 0-.122-1.494M17.463 9.236c-1.113-.326-2.388-.544-3.789-.648a.75.75 0 0 0-.111 1.496c1.296.096 2.466.296 3.48.591q.105.031.21.031a.75.75 0 0 0 .21-1.47"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 15.721c-5.106 0-8.245-1.657-8.25-2.847.002-.42.392-.81.719-1.066a.75.75 0 0 0 .134-1.053.75.75 0 0 0-.5-.283c1.033-3.375 4.18-5.85 7.897-5.85s6.864 2.474 7.897 5.85a.75.75 0 0 0-.5.283.75.75 0 0 0 .134 1.053c.327.255.717.645.719 1.066-.005 1.19-3.144 2.847-8.25 2.847m9.75-2.85c0-5.37-4.37-9.75-9.75-9.75s-9.75 4.38-9.75 9.75v.005c0 .087 0 .167.01.255.13 5.26 4.45 9.49 9.74 9.49s9.61-4.23 9.74-9.49c.01-.088.01-.167.01-.254v-.006"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSphereGlobDashBold;
