import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTiktokLight = ({
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
      d="M9.991 9.34a5.826 5.826 0 0 0-5.83 5.83c0 3.226 2.61 5.83 5.83 5.83s5.83-2.604 5.83-5.83V8.686s2.079 1.505 4.018.987v-3.24C17.056 6.17 15.954 3.9 15.654 3H12.94v12.088c0 1.494-1.208 2.7-2.699 2.7a2.7 2.7 0 0 1-2.7-2.7 2.7 2.7 0 0 1 2.424-2.686c0-.89.025-3.062.025-3.062"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTiktokLight;
