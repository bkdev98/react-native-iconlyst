import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScreenSizeBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.058 21c2.945 0 5.026-1.834 5.026-4.782V7.783C21.084 4.835 19.003 3 16.058 3H8.11C5.165 3 3.084 4.835 3.084 7.783v8.435C3.084 19.156 5.165 21 8.11 21h4.415"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.911 16.572-1.006.002a1.394 1.394 0 0 1-1.396-1.396l.002-1.006M16.656 14.172l.002 1.006a1.39 1.39 0 0 1-1.395 1.396l-1.007-.002M7.512 9.828 7.51 8.822a1.393 1.393 0 0 1 1.395-1.396l1.007.003M14.257 7.428l1.006-.002a1.393 1.393 0 0 1 1.396 1.395l-.002 1.006"
    />
  </Svg>
);
export default IconlystScreenSizeBroken;
