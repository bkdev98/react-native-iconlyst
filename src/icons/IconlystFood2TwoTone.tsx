import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFood2TwoTone = ({
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
      d="M16.718 21H8.283C5.335 21 3.5 18.919 3.5 15.974V8.026C3.5 5.081 5.335 3 8.284 3h8.434C19.666 3 21.5 5.081 21.5 8.026v7.948c0 2.945-1.843 5.026-4.782 5.026"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.844 15.937h11.311m-10.515 0-.026-.52a4.892 4.892 0 1 1 9.771 0l-.026.52m-3.896-5.656V9.026a.963.963 0 1 0-1.926 0v1.255"
    />
  </Svg>
);
export default IconlystFood2TwoTone;
