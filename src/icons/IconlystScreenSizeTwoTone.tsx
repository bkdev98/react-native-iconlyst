import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScreenSizeTwoTone = ({
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
      d="M3.334 16.218V7.783C3.334 4.835 5.415 3 8.36 3h7.948c2.945 0 5.026 1.835 5.026 4.783v8.435c0 2.948-2.081 4.782-5.026 4.782H8.36c-2.945 0-5.026-1.844-5.026-4.782"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.161 16.572-1.006.002a1.394 1.394 0 0 1-1.396-1.396l.002-1.006M16.906 14.172l.002 1.006a1.39 1.39 0 0 1-1.395 1.396l-1.007-.002M7.762 9.828 7.76 8.822a1.393 1.393 0 0 1 1.395-1.396l1.007.003M14.507 7.428l1.006-.002a1.393 1.393 0 0 1 1.396 1.395l-.002 1.006"
    />
  </Svg>
);
export default IconlystScreenSizeTwoTone;
