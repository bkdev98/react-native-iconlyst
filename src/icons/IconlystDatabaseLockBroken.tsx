import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseLockBroken = ({
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
      d="M15.681 20.968c-.862 0-1.562-.7-1.562-1.562V17.64c0-.862.7-1.562 1.562-1.562h3.146c.863 0 1.562.7 1.562 1.562v1.766c0 .863-.7 1.562-1.562 1.562"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.133 16.107v-1.162a1.879 1.879 0 0 0-3.756-.009v1.171M3.578 5.92v5.84s0 2.919 7.376 2.919M18.33 9.728v-3.81M3.578 15.406v2.192s0 2.92 7.376 2.92"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.954 3C6.88 3 3.578 4.315 3.578 5.938s3.302 2.938 7.376 2.938 7.376-1.315 7.376-2.938c0-1.15-1.66-2.147-4.079-2.629"
    />
  </Svg>
);
export default IconlystDatabaseLockBroken;
