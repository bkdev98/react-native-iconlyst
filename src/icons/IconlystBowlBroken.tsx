import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBowlBroken = ({
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
      d="M12.002 17.118c4.969 0 8.998-3.344 8.998-7.48 0-.146 0-.275-.01-.42V9.2a4 4 0 0 0-.069-.533M3.083 8.668a4 4 0 0 0-.068.533v.017c-.011.145-.011.274-.011.42 0 3.2 2.413 5.927 5.807 6.996"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 11.003C7.028 11.003 3 10.08 3 8.943s4.028-2.06 8.998-2.06 8.998.922 8.998 2.06c0 .883-2.43 1.637-5.846 1.93"
    />
  </Svg>
);
export default IconlystBowlBroken;
