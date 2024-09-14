import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAnnotationMessage5AiTwoTone = ({
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
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M3 10.522C3 6.666 6.097 3.54 9.917 3.54h4.166c3.82 0 6.917 3.126 6.917 6.982s-3.097 6.981-6.917 6.981H13.04v3.037s-5.976-1.908-8.646-5.814A7 7 0 0 1 3 10.522" />
      <Path d="M3 10.522C3 6.666 6.097 3.54 9.917 3.54h4.166c3.82 0 6.917 3.126 6.917 6.982s-3.097 6.981-6.917 6.981H13.04v3.037s-5.976-1.908-8.646-5.814A7 7 0 0 1 3 10.522" />
      <Path d="M3 10.522C3 6.666 6.097 3.54 9.917 3.54h4.166c3.82 0 6.917 3.126 6.917 6.982s-3.097 6.981-6.917 6.981H13.04v3.037s-5.976-1.908-8.646-5.814A7 7 0 0 1 3 10.522" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.125 12.607.094-.255a3.5 3.5 0 0 1 2.068-2.071l.255-.094-.255-.095a3.5 3.5 0 0 1-2.068-2.071l-.094-.255-.094.255a3.5 3.5 0 0 1-2.069 2.071l-.254.095.254.094a3.5 3.5 0 0 1 2.069 2.071zM9.18 13.763c.16-.526.571-.937 1.096-1.097a1.65 1.65 0 0 1-1.095-1.097c-.16.526-.57.937-1.096 1.097.525.16.936.571 1.096 1.097"
    />
  </Svg>
);
export default IconlystAnnotationMessage5AiTwoTone;
