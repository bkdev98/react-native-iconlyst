import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailOpenAddPlusOutline = ({
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
      fill={props.color}
      d="M15.408 20.671H7.394a5.07 5.07 0 0 1-3.6-1.335 4.65 4.65 0 0 1-1.292-3.386v-5.283c0-.598.154-1.187.446-1.709.26-.47.624-.876 1.064-1.185l5.566-3.874a3.16 3.16 0 0 1 3.629 0l2.388 1.657a.75.75 0 1 1-.856 1.233l-2.392-1.66a1.65 1.65 0 0 0-1.908 0L4.87 9.007a2.04 2.04 0 0 0-.61.684c-.17.298-.258.635-.257.978v5.283a3.19 3.19 0 0 0 .85 2.323 3.38 3.38 0 0 0 2.54.9h8.013a3.48 3.48 0 0 0 2.525-.9 3.2 3.2 0 0 0 .85-2.323v-1.531a.75.75 0 1 1 1.5 0v1.531a4.65 4.65 0 0 1-1.292 3.386 4.93 4.93 0 0 1-3.58 1.333"
    />
    <Path
      fill={props.color}
      d="M16.94 12.608a.75.75 0 0 1-.75-.75v-.7h-.7a.75.75 0 1 1 0-1.5h.7v-.705a.75.75 0 1 1 1.5 0v.705h.706a.75.75 0 0 1 0 1.5h-.707v.7a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M16.939 15.465a5.063 5.063 0 1 1 5.063-5.061 5.066 5.066 0 0 1-5.063 5.06m0-8.623a3.562 3.562 0 1 0 .002 7.124 3.562 3.562 0 0 0-.002-7.124"
    />
    <Path
      fill={props.color}
      d="M11.42 15.509a3.8 3.8 0 0 1-2.361-.825L3.136 9.909a.75.75 0 1 1 .942-1.168l5.916 4.77a2.29 2.29 0 0 0 2.855 0l.678-.55a.751.751 0 0 1 .944 1.165l-.684.554a3.8 3.8 0 0 1-2.367.829"
    />
  </Svg>
);
export default IconlystEmailOpenAddPlusOutline;
