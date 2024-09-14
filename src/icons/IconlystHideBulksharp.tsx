import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHideBulksharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m18.88 10.49 3.525 3.526-1.414 1.414-3.526-3.525zM5.62 10.49l-3.524 3.526L3.51 15.43l3.525-3.525zM15.304 13.074l1.402 4.83-1.921.558-1.402-4.83zM9.196 13.074l-1.402 4.83 1.92.558 1.403-4.83z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.404 8.509c-2.134 4.49-5.93 7.173-10.151 7.175h-.005C8.026 15.682 4.23 13 2.097 8.509l-.429-.903 1.807-.86.43.905c1.793 3.777 4.913 6.032 8.347 6.033 3.432-.001 6.551-2.256 8.346-6.033l.43-.904 1.805.859z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHideBulksharp;
