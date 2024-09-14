import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCube4Bold = ({
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
      d="M11.7 12.2a.6.6 0 0 0 .6 0l7.298-4.214c.162-.093.2-.311.067-.442a2.5 2.5 0 0 0-.512-.393l-5.684-3.28a2.91 2.91 0 0 0-2.937 0L4.848 7.148q-.284.167-.515.395c-.133.13-.094.349.068.442zM11.25 14.02a.6.6 0 0 0-.3-.52L3.817 9.38c-.18-.103-.418 0-.434.208q-.003.052-.004.105v6.56c0 1.052.563 2.026 1.468 2.542l5.683 3.28q.171.099.35.174c.183.075.37-.069.37-.266zM13.05 13.5a.6.6 0 0 0-.3.519v7.964c0 .197.187.34.37.265q.177-.074.347-.172l5.684-3.279a2.93 2.93 0 0 0 1.47-2.544v-6.56l-.004-.105c-.015-.207-.254-.31-.434-.207z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCube4Bold;
