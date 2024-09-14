import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFood1Outline = ({
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
      fillRule="evenodd"
      d="M20.52 15.099a1.75 1.75 0 0 1 1.139 2.22 2.62 2.62 0 0 1-2.483 1.791H4.824a2.62 2.62 0 0 1-2.484-1.79 1.75 1.75 0 0 1 1.139-2.221l-.006-.119a8.54 8.54 0 0 1 7.777-8.938V5.14c0-.42.336-.75.75-.75s.75.33.75.75v.902c4.523.394 8.007 4.31 7.777 8.928zM4.977 15.02l-.006-.12a7.039 7.039 0 1 1 14.058 0l-.006.12zm14.723 1.5H4.003a.252.252 0 0 0-.24.33c.152.45.58.76 1.06.76h14.353c.48 0 .909-.31 1.06-.76a.25.25 0 0 0-.239-.33H19.7"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFood1Outline;
