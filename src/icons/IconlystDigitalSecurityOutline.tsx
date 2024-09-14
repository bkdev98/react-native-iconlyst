import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDigitalSecurityOutline = ({
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
      fill={props.color}
      d="M3.798 13.808c-1.1 0-1.99-.89-1.99-1.99s.89-1.99 1.99-1.99 1.99.89 1.99 1.99-.89 1.99-1.99 1.99m0-2.48a.49.49 0 1 0 .001.982.49.49 0 0 0-.001-.982"
    />
    <Path
      fill={props.color}
      d="M7.058 12.568h-2.02c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.02c.41 0 .75.34.75.75s-.34.75-.75.75M19.078 12.568h-2.02c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.02c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
    <Path
      fill={props.color}
      d="M20.318 13.808c-1.1 0-1.99-.89-1.99-1.99s.89-1.99 1.99-1.99 1.99.89 1.99 1.99-.89 1.99-1.99 1.99m0-2.48a.49.49 0 1 0 .001.982.49.49 0 0 0-.001-.982M12.018 18.708c-.41 0-.75-.34-.75-.75v-2.02c0-.41.34-.75.75-.75s.75.34.75.75v2.02c0 .41-.34.75-.75.75"
    />
    <Path
      fill={props.color}
      d="M12.018 21.187a1.989 1.989 0 1 1 0-3.98c1.1 0 1.99.89 1.99 1.99s-.89 1.99-1.99 1.99m0-2.48a.49.49 0 1 0 .001.982.49.49 0 0 0-.001-.982M15.058 8.889c-.41 0-.75-.34-.75-.75v-1.42c0-.59-.25-1.16-.68-1.58-.42-.41-.98-.64-1.57-.64h-.03a2.25 2.25 0 0 0-2.23 2.22v1.42c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.43c.04-2.06 1.66-3.68 3.71-3.7 1.04-.02 1.95.37 2.67 1.07s1.12 1.64 1.13 2.64v1.42c0 .41-.34.75-.75.75"
    />
    <Path
      fill={props.color}
      d="M13.878 16.687h-3.64c-1.15 0-1.79 0-2.36-.27-.56-.27-1.03-.73-1.3-1.3s-.27-1.21-.27-2.36v-1.44c0-1.15 0-1.79.27-2.36s.73-1.03 1.3-1.3 1.2-.27 2.35-.27h3.64c1.15 0 1.79 0 2.36.27s1.03.73 1.3 1.3.27 1.2.27 2.35v1.44c0 1.15 0 1.79-.27 2.36s-.74 1.03-1.3 1.3c-.57.27-1.2.27-2.35.27zm-3.64-7.8c-.93 0-1.44 0-1.71.13-.26.12-.47.34-.6.6s-.13.78-.13 1.71v1.44c0 .93 0 1.45.13 1.71.12.26.34.47.6.6s.78.13 1.71.13h3.64c.93 0 1.44 0 1.71-.13.26-.12.47-.34.6-.6s.13-.78.13-1.71v-1.44c0-.93 0-1.44-.13-1.71-.12-.26-.34-.47-.6-.6s-.78-.13-1.71-.13z"
    />
  </Svg>
);
export default IconlystDigitalSecurityOutline;
