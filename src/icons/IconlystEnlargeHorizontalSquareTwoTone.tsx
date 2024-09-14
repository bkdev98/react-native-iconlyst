import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEnlargeHorizontalSquareTwoTone = ({
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
      d="M21.5 16.468V8.033c0-2.948-2.081-4.783-5.026-4.783H8.526C5.581 3.25 3.5 5.085 3.5 8.034v8.434c0 2.948 2.081 4.782 5.026 4.782h7.948c2.945 0 5.026-1.843 5.026-4.782"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.209 14.396 2.145-2.145-2.145-2.145M12.5 7.488v9.524M17.79 14.396l-2.145-2.145 2.145-2.145"
    />
  </Svg>
);
export default IconlystEnlargeHorizontalSquareTwoTone;
