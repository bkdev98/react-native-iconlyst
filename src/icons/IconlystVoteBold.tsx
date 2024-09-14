import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoteBold = ({
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
      d="M21.5 12.085c-.04 1.16-.57 2.27-1.52 3.22l-4.67 4.67c-1.02 1.02-2.2 1.53-3.36 1.53-1.1 0-2.19-.46-3.11-1.38l-4.96-4.96c-1.89-1.89-1.84-4.5.14-6.48l4.67-4.67c1.98-1.97 4.58-2.03 6.48-.14l3.04 3.05-6.48 6.49-2.5-2.5a.754.754 0 0 0-1.06 0c-.3.3-.3.77 0 1.06l3.03 3.03a.75.75 0 0 0 1.06 0l7.01-7.02.85.85c.95.94 1.42 2.06 1.38 3.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVoteBold;
