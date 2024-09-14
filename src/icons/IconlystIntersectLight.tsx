import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIntersectLight = ({
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
      d="M6.421 8.121h6.036c2.109 0 3.422 1.489 3.422 3.596v5.687c0 2.108-1.313 3.596-3.423 3.596H6.42C4.311 21 3 19.513 3 17.405v-5.687C3 9.61 4.318 8.121 6.421 8.121M15.883 12.692l-3.888 3.186m2.78-5.885-5.823 4.78m3.706-6.652-4.47 3.671"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.578 3h-6.036c-2.103 0-3.42 1.489-3.42 3.596v5.687c0 2.108 1.31 3.597 3.42 3.597h6.035c2.11 0 3.423-1.49 3.423-3.597V6.596C21 4.49 19.687 3 17.578 3"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystIntersectLight;
