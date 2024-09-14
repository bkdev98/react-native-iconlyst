import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeptagonBroken = ({
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
      d="m3.564 13.227 1.276-5.59a2.56 2.56 0 0 1 1.385-1.736l5.164-2.487a2.56 2.56 0 0 1 2.221 0l5.165 2.487M20.479 9.035l.957 4.192a2.56 2.56 0 0 1-.495 2.165l-3.574 4.482a2.56 2.56 0 0 1-2.002.964H9.634a2.56 2.56 0 0 1-2.002-.964L4.84 16.372"
    />
  </Svg>
);
export default IconlystHeptagonBroken;
