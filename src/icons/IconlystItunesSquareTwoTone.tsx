import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystItunesSquareTwoTone = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.945 9.418c-1.94.394-3.88.78-5.818 1.176"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.941 12.859c-.004.257-.232.343-.44.394-.643.143-1.426.028-2.001.402a1.24 1.24 0 0 0-.56 1.106c.031.485.39.93.859 1.065.674.204 1.602-.116 1.951-.726.17-.308.204-.67.193-1.016 0-1.879-.003-5.202-.005-6.64a.57.57 0 0 0-.684-.557l-4.674.948a.57.57 0 0 0-.458.56l.003 6.923c.011.346-.023.707-.193 1.015-.364.637-1.26.936-1.951.726a1.22 1.22 0 0 1-.859-1.065 1.24 1.24 0 0 1 .56-1.105c.575-.374 1.358-.26 2.001-.403.208-.05.436-.137.44-.394"
    />
  </Svg>
);
export default IconlystItunesSquareTwoTone;
