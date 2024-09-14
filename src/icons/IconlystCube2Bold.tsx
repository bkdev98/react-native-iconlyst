import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCube2Bold = ({
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
      d="m9.242 15.431-1.501.87a.75.75 0 1 1-.752-1.297l1.501-.87a.748.748 0 1 1 .752 1.297m2.008-1.412a.6.6 0 0 0-.3-.52L3.818 9.383c-.18-.104-.42 0-.435.208l-.004.103v6.56c0 1.052.563 2.027 1.468 2.542l5.684 3.28q.17.098.349.173c.182.076.37-.068.37-.265zM11.25 7.622a.75.75 0 0 1 1.5 0v1.73a.75.75 0 1 1-1.5 0zm.45 4.578a.6.6 0 0 0 .6 0l7.298-4.214c.162-.094.2-.312.067-.443a2.5 2.5 0 0 0-.512-.393l-5.684-3.279a2.91 2.91 0 0 0-2.936 0L4.85 7.147c-.192.11-.362.246-.516.396-.134.13-.095.35.067.443zM17.286 16.029a.75.75 0 0 1-1.025.272l-1.5-.87a.75.75 0 1 1 .753-1.297l1.5.87c.358.209.48.667.272 1.025m-4.236-2.53a.6.6 0 0 0-.3.52v7.964c0 .197.187.341.37.265a3 3 0 0 0 .347-.172l5.683-3.278a2.93 2.93 0 0 0 1.471-2.544V9.693q0-.054-.004-.106c-.016-.207-.254-.31-.434-.207z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCube2Bold;
