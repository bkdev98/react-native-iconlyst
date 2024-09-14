import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDresser1Light = ({
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
      d="M7.086 3.005h9.828c2.03 0 3.293 1.433 3.293 3.46v9.493c0 2.028-1.264 3.46-3.294 3.46H7.086c-2.03 0-3.293-1.432-3.293-3.46V6.466c0-2.028 1.269-3.461 3.293-3.461M17.91 21v-1.697M6.089 21v-1.697M14.54 10.078v2.268M9.46 10.078v2.268M11.998 19.421V3"
    />
  </Svg>
);
export default IconlystDresser1Light;
