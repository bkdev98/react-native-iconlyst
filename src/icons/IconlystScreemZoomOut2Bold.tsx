import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScreemZoomOut2Bold = ({
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
      d="M6.344 14.41h-2.51a1 1 0 1 0 0 2h2.51a2.08 2.08 0 0 1 2.076 2.08V21a1 1 0 1 0 2 0v-2.51c0-2.25-1.828-4.08-4.076-4.08M21.834 14.41h-2.51a4.08 4.08 0 0 0-4.076 4.08V21a1 1 0 1 0 2 0v-2.51c0-1.147.932-2.08 2.076-2.08h2.51a1 1 0 1 0 0-2M9.42 2a1 1 0 0 0-1 1v2.51c0 1.146-.932 2.08-2.076 2.08h-2.51a1 1 0 1 0 0 2h2.51a4.08 4.08 0 0 0 4.076-4.08V3a1 1 0 0 0-1-1M19.325 9.59h2.51a1 1 0 1 0 0-2h-2.51a2.08 2.08 0 0 1-2.076-2.08V3a1 1 0 1 0-2 0v2.51c0 2.25 1.827 4.08 4.076 4.08"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScreemZoomOut2Bold;
