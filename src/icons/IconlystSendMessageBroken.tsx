import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSendMessageBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.575 17.167 6.757-3.704c1.119-.614 1.119-2.226 0-2.84L6.818 3.215c-1.225-.672-2.664.43-2.342 1.792l1.663 7.036-1.663 7.034c-.322 1.363 1.117 2.465 2.342 1.794l3.379-1.852M14.511 12.02l-8.333.043"
    />
  </Svg>
);
export default IconlystSendMessageBroken;
