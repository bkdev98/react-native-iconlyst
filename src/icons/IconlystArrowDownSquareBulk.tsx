import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDownSquareBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="M2 7.916v8.168C2 19.623 4.276 22 7.665 22h8.67C19.724 22 22 19.623 22 16.084V7.916C22 4.378 19.723 2 16.334 2h-8.67C4.277 2 2 4.378 2 7.916"
        opacity={0.4}
      />
      <Path d="m7.72 12.855 3.749 3.765a.773.773 0 0 0 1.064 0l3.748-3.765a.75.75 0 0 0-1.064-1.059l-2.467 2.477V7.918a.75.75 0 1 0-1.5 0v6.355l-2.466-2.477a.75.75 0 0 0-1.061-.002.75.75 0 0 0-.002 1.061" />
    </G>
  </Svg>
);
export default IconlystArrowDownSquareBulk;
