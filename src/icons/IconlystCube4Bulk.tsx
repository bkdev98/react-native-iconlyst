import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCube4Bulk = ({
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
      d="M11.7 11.48a.6.6 0 0 0 .6 0l7.298-4.214c.162-.093.2-.312.067-.442a2.5 2.5 0 0 0-.512-.393L13.47 3.15a2.91 2.91 0 0 0-2.937-.001L4.848 6.429q-.284.167-.515.395c-.133.13-.094.349.068.442z"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M11.25 13.299a.6.6 0 0 0-.3-.52L3.817 8.66c-.18-.103-.419.001-.434.208q-.004.053-.004.105v6.56c0 1.052.563 2.026 1.468 2.542l5.683 3.28q.171.099.35.174c.183.075.37-.069.37-.265zM13.05 12.778a.6.6 0 0 0-.3.52v7.964c0 .197.187.341.37.265q.177-.074.347-.172l5.684-3.278a2.93 2.93 0 0 0 1.47-2.544V8.972l-.004-.105c-.016-.207-.255-.31-.434-.207z" />
    </G>
  </Svg>
);
export default IconlystCube4Bulk;
