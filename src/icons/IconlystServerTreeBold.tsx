import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerTreeBold = ({
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
      fillRule="evenodd"
      d="M19.75 16.278V14.65A2.753 2.753 0 0 0 17 11.9h-4.25V8.85h4.05c1.682 0 3-1.318 3-3s-1.318-3-3-3H7.5c-1.682 0-3 1.318-3 3s1.318 3 3 3h3.75v3.05H7a2.753 2.753 0 0 0-2.75 2.75v1.628A2.495 2.495 0 0 0 2.5 18.65c0 1.379 1.122 2.5 2.5 2.5s2.5-1.121 2.5-2.5a2.495 2.495 0 0 0-1.75-2.372V14.65c0-.69.561-1.25 1.25-1.25h4.25v2.878A2.495 2.495 0 0 0 9.5 18.65c0 1.379 1.122 2.5 2.5 2.5s2.5-1.121 2.5-2.5a2.495 2.495 0 0 0-1.75-2.372V13.4H17c.689 0 1.25.56 1.25 1.25v1.628a2.495 2.495 0 0 0-1.75 2.372c0 1.379 1.122 2.5 2.5 2.5s2.5-1.121 2.5-2.5a2.495 2.495 0 0 0-1.75-2.372"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerTreeBold;
