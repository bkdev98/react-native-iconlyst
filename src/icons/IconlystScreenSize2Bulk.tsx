import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScreenSize2Bulk = ({
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
      d="M21.834 14.41a1 1 0 0 0-1 1v2.52c0 1.141-.932 2.07-2.076 2.07h-2.51a1 1 0 1 0 0 2h2.51a4.077 4.077 0 0 0 4.076-4.07v-2.52a1 1 0 0 0-1-1M9.42 2H6.91a4.08 4.08 0 0 0-4.076 4.08v2.51a1 1 0 1 0 2 0V6.08C4.834 4.934 5.766 4 6.91 4h2.51a1 1 0 1 0 0-2"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M9.42 20H6.91a2.076 2.076 0 0 1-2.076-2.07v-2.522a1 1 0 1 0-2 0v2.521A4.077 4.077 0 0 0 6.91 22h2.51a1 1 0 1 0 0-2M18.758 2h-2.51a1 1 0 1 0 0 2h2.51a2.08 2.08 0 0 1 2.076 2.08v2.51a1 1 0 1 0 2 0V6.08c0-2.25-1.828-4.08-4.076-4.08" />
    </G>
  </Svg>
);
export default IconlystScreenSize2Bulk;
