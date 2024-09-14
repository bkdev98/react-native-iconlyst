import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacLaptopNotebookRemoveOutline = ({
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
      fillRule="evenodd"
      d="M2.5 16.417a1.3 1.3 0 0 1 1.3-1.3h16.9a1.3 1.3 0 0 1 1.3 1.3v.507a3.18 3.18 0 0 1-3.178 3.178H5.679A3.18 3.18 0 0 1 2.5 16.924zm1.5.2v.307a1.68 1.68 0 0 0 1.679 1.678h13.143a1.68 1.68 0 0 0 1.678-1.678v-.307z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.83 7.66a3.76 3.76 0 0 1 3.761-3.762h9.317a3.76 3.76 0 0 1 3.761 3.763v8.206a.75.75 0 0 1-1.5 0V7.66a2.26 2.26 0 0 0-2.261-2.263H7.59a2.26 2.26 0 0 0-2.26 2.263v8.206a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.112 8.263a.75.75 0 0 1 1.06 0l1.08 1.078 1.078-1.078a.75.75 0 1 1 1.06 1.06l-1.078 1.079 1.079 1.078a.75.75 0 1 1-1.061 1.06l-1.079-1.078-1.078 1.079a.75.75 0 0 1-1.06-1.06l1.078-1.08-1.079-1.078a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMacLaptopNotebookRemoveOutline;
