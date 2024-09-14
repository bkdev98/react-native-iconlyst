import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCodeCloudBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.243 14.694c-.187 0-.434-.039-.682-.14a1.7 1.7 0 0 1-.997-1.545c0-1.064.751-1.688 1.68-1.696 0-.668.525-2.006 2.007-2.006 1.48 0 2.006 1.338 2.006 2.006.929.008 1.68.632 1.68 1.696 0 .688-.409 1.282-.996 1.548-.251.1-.498.137-.686.137h-1.191M16.278 5.164c4.972 0 0 6.836 4.972 6.836-4.972 0 0 6.836-4.972 6.836M8.223 5.164c-4.972 0 0 6.836-4.972 6.836 4.972 0 0 6.836 4.972 6.836"
    />
  </Svg>
);
export default IconlystCodeCloudBroken;
