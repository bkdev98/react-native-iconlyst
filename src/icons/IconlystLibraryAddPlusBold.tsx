import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLibraryAddPlusBold = ({
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
      fill={props.color}
      d="M21 5.852H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2M3 10.617h9.143a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2M9.269 15.383h-6.27a1 1 0 0 1 0-2h6.27a1 1 0 0 1 0 2M6.644 20.148H3a1 1 0 0 1 0-2h3.644a1 1 0 0 1 0 2M15.929 19.148a1 1 0 0 0 2 0V17.07h2.078a1 1 0 0 0 0-2h-2.078v-2.078a1 1 0 0 0-2 0v2.078h-2.077a1 1 0 0 0 0 2h2.077z"
    />
  </Svg>
);
export default IconlystLibraryAddPlusBold;
