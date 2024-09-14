import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScreenSizeLight = ({
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
      d="M3.834 16.218V7.783C3.834 4.835 5.915 3 8.86 3h7.948c2.945 0 5.026 1.835 5.026 4.783v8.435c0 2.948-2.081 4.782-5.026 4.782H8.86c-2.945 0-5.026-1.844-5.026-4.782"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.66 16.572-1.006.002a1.394 1.394 0 0 1-1.396-1.396l.002-1.006M17.406 14.172l.002 1.006a1.39 1.39 0 0 1-1.395 1.396l-1.007-.002M8.262 9.828 8.26 8.822a1.393 1.393 0 0 1 1.395-1.396l1.007.003M15.008 7.428l1.006-.002A1.393 1.393 0 0 1 17.41 8.82l-.002 1.006"
    />
  </Svg>
);
export default IconlystScreenSizeLight;
