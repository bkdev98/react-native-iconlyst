import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRightSquareBulk = ({
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
        d="M7.916 22h8.168C19.623 22 22 19.724 22 16.335v-8.67C22 4.276 19.623 2 16.084 2H7.916C4.378 2 2 4.277 2 7.666v8.67C2 19.723 4.378 22 7.916 22"
        opacity={0.4}
      />
      <Path d="m12.855 16.28 3.765-3.749a.773.773 0 0 0 0-1.064L12.855 7.72a.75.75 0 0 0-1.059 1.064l2.477 2.467H7.918a.75.75 0 1 0 0 1.5h6.355l-2.477 2.466a.75.75 0 0 0-.002 1.061.75.75 0 0 0 1.061.002" />
    </G>
  </Svg>
);
export default IconlystArrowRightSquareBulk;
