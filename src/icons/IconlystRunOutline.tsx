import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRunOutline = ({
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
      d="M18.715 11.994a7.6 7.6 0 0 1-4.015-.934 9.6 9.6 0 0 1-1.383-1.1 17 17 0 0 0-.582-.513 4.22 4.22 0 0 0-5.487.264.75.75 0 0 1-1.042-1.079 5.68 5.68 0 0 1 7.486-.34c.215.178.424.367.632.556q.538.52 1.16.934a7 7 0 0 0 3.967.694.73.73 0 0 1 .782.717.75.75 0 0 1-.716.782q-.385.018-.802.02"
    />
    <Path
      fill={props.color}
      d="M12.015 21.75a.752.752 0 0 1-.683-1.06l.25-.542a6.9 6.9 0 0 0 .952-3.38 3.2 3.2 0 0 0-.837-1.607 5.4 5.4 0 0 1-1.073-1.9c-.59-2.2.67-3.771 1.682-5.034a.75.75 0 0 1 1.17.938c-1.118 1.4-1.77 2.34-1.4 3.707.178.506.453.973.81 1.374a4.54 4.54 0 0 1 1.144 2.374 8.06 8.06 0 0 1-1.084 4.166l-.244.526a.75.75 0 0 1-.687.438M6.251 17.218h-.42c-.266 0-.53-.005-.794 0a.75.75 0 1 1-.043-1.5c.283-.01.567-.006.851 0q.723.023 1.442-.048a5.3 5.3 0 0 0 1.9-.683.75.75 0 0 1 .714 1.32 6.8 6.8 0 0 1-2.426.85 10 10 0 0 1-1.224.06M15.627 7.73a2.74 2.74 0 1 1 0-5.48 2.74 2.74 0 0 1 0 5.48m0-3.98a1.24 1.24 0 1 0 0 2.48 1.24 1.24 0 0 0 0-2.48"
    />
  </Svg>
);
export default IconlystRunOutline;
