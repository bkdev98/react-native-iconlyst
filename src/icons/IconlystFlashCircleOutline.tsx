import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashCircleOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.192 2.721a.75.75 0 0 1 .192.666l-1.875 9.251h1.12a.75.75 0 0 1 .73.918L9.696 20.78a.75.75 0 0 1-.983.538 9.7 9.7 0 0 1-3.607-2.287c-3.808-3.807-3.808-9.98 0-13.788a9.7 9.7 0 0 1 5.43-2.746.75.75 0 0 1 .656.224M9.685 4.216A8.25 8.25 0 0 0 8.434 19.58l1.252-5.44H8.592a.75.75 0 0 1-.735-.9zM16.186 3.606a.75.75 0 0 1 .632.05 9.8 9.8 0 0 1 2.076 1.586c3.808 3.807 3.808 9.98 0 13.788a9.73 9.73 0 0 1-7.863 2.808.75.75 0 0 1-.586-1.103l4.426-8.201h-1.086a.75.75 0 0 1-.707-1.002l2.662-7.475a.75.75 0 0 1 .446-.451m.65 1.844-1.988 5.584h1.28a.75.75 0 0 1 .66 1.106l-4.446 8.239A8.25 8.25 0 0 0 16.836 5.45"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlashCircleOutline;
