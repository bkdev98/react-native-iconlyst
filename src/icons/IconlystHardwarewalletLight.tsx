import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHardwarewalletLight = ({
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
      d="m17.03 12.627-5.656-5.656a1.143 1.143 0 0 0-1.616 0l-5.252 5.252a5.142 5.142 0 1 0 7.272 7.272l5.251-5.252a1.143 1.143 0 0 0 0-1.616M16.625 5.758l-.404.404m2.02 1.212-.404.404"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.777 7.375 4.04-4.04a1.143 1.143 0 0 1 1.616 0l3.232 3.232c.446.446.446 1.17 0 1.615l-4.04 4.04M6.93 17.07a1.714 1.714 0 1 0 2.424-2.423A1.714 1.714 0 0 0 6.93 17.07"
    />
  </Svg>
);
export default IconlystHardwarewalletLight;
