import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPartyBroken = ({
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
      d="M14.609 14.404c2.354-2.522 3.54-5.241 2.647-6.074-.713-.667-2.542.078-4.451 1.695M9.697 13.508c-1.173 1.777-1.608 3.355-.966 3.955.657.613 2.256.032 3.994-1.323"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.064 17.662 11.063 2.91a.695.695 0 0 0 .839-.883l-.889-2.79M17.411 8.527l1.777 5.582M3 6.813h.023m2.8 10.378h.023M9.704 5.899a1.2 1.2 0 1 1-1.2-1.2M6.461 13.887s-1.878.037-3.316 1.928M12.546 12.689s-3.283-3.39-8.314-1.957M13.768 3.402s-1.901 2.604.204 5.734"
    />
  </Svg>
);
export default IconlystPartyBroken;
