import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesCloseBroken = ({
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
      d="m14.483 9.798-3.364 3.375m3.367.004-3.369-3.38M6.182 6.99a8.96 8.96 0 0 0-1.53 4.635c-.22 4.742 3.623 8.652 7.878 9.862.322.092.64-.166.64-.501v-1.487c0-.262.199-.474.459-.505 4.257-.513 7.74-3.571 7.29-8.163-.373-3.782-3.396-6.908-7.161-7.332-1.697-.191-3.273.135-4.62.84"
    />
  </Svg>
);
export default IconlystMessagesCloseBroken;
