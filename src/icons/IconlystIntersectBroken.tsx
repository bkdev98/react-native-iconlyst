import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIntersectBroken = ({
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
      d="M6.421 21C4.311 21 3 19.513 3 17.405v-5.687C3 9.61 4.318 8.121 6.421 8.121h6.036c2.109 0 3.422 1.489 3.422 3.596v5.687c0 2.108-1.313 3.596-3.423 3.596H9.438M11.238 12.897l-2.286 1.876M12.658 8.121l-4.47 3.671M15.883 12.693l-3.888 3.186M14.776 9.992l-1.456 1.195"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.578 3C19.687 3 21 4.489 21 6.596v5.687c0 2.108-1.313 3.597-3.423 3.597h-6.035c-2.11 0-3.42-1.49-3.42-3.597V6.596C8.121 4.49 9.438 3 11.541 3h2.443"
    />
  </Svg>
);
export default IconlystIntersectBroken;
