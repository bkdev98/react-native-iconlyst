import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrelloBroken = ({
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
      d="M15.182 12.973h1.946A.973.973 0 0 0 18.1 12V8.108a.973.973 0 0 0-.973-.973h-1.946a.973.973 0 0 0-.973.973V12c0 .537.436.973.973.973M7.398 12v3.892c0 .537.436.973.973.973h1.946a.973.973 0 0 0 .973-.973V8.108a.973.973 0 0 0-.973-.973H8.371a.973.973 0 0 0-.973.973v.544"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.749 21H8.532c-2.948 0-4.782-2.081-4.782-5.026V8.026C3.75 5.081 5.593 3 8.532 3h8.435c2.948 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.835 5.026-4.784 5.026h-.567"
    />
  </Svg>
);
export default IconlystTrelloBroken;
