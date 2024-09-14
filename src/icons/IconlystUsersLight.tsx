import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUsersLight = ({
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
    <Circle
      cx={8.562}
      cy={8.984}
      r={4.281}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.718 19.3c-.1-.581-.06-1.184-.06-1.77a4.006 4.006 0 0 1 4.007-4.007h3.9a4.006 4.006 0 0 1 4.006 4.006c0 .587.042 1.19-.059 1.77"
    />
    <Circle
      cx={17.423}
      cy={11.569}
      r={2.929}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.603 18.738c.07-.409.042-.832.042-1.244a2.814 2.814 0 0 0-2.814-2.814h-2.74c-.795 0-1.513.329-2.025.859"
    />
  </Svg>
);
export default IconlystUsersLight;
