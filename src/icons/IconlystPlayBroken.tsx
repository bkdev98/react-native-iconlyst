import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.826 9.06c1.876 1.7 1.92 4.115 0 5.88a25.7 25.7 0 0 1-7.536 4.729c-2.433.959-4.471-.237-4.77-2.635-.364-3.535-.356-6.92 0-10.078.326-2.493 2.571-3.55 4.77-2.625q1.437.588 2.77 1.321"
    />
  </Svg>
);
export default IconlystPlayBroken;
