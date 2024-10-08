import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilter2Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="m9.28 15.824 4.855.015a.56.56 0 0 1 .547.565v2.731a.8.8 0 0 1-.453.725l-4.406 2.069a.76.76 0 0 1-.739-.055.8.8 0 0 1-.355-.67V16.39c0-.312.247-.566.551-.565M19.872 2C21.048 2 22 2.981 22 4.192v1.532c0 .587-.23 1.152-.637 1.563l-6.505 6.58a.59.59 0 0 1-.422.177l-5.447-.017a.6.6 0 0 1-.437-.195L2.575 7.257A2.23 2.23 0 0 1 2 5.757V4.194C2 2.983 2.952 2 4.128 2Z"
    />
  </Svg>
);
export default IconlystFilter2Bold;
