import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentInfinityBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.859 20.59a4.026 4.026 0 0 1-4.026-4.025V7.026A4.026 4.026 0 0 1 7.859 3h3.778M14.794 3a4.026 4.026 0 0 1 4.025 4.026v6.152M11.436 12.876H8.843m4.967-4.337H8.843M14.283 20.448a1.884 1.884 0 1 1 0-2.666l2.665 2.666a1.886 1.886 0 0 0 2.666-2.666 1.886 1.886 0 0 0-2.666 0z"
    />
  </Svg>
);
export default IconlystDocumentInfinityBroken;
