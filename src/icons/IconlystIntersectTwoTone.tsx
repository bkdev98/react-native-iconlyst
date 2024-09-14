import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIntersectTwoTone = ({
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
      d="M6.921 8.121h6.036c2.109 0 3.421 1.489 3.421 3.596v5.687c0 2.108-1.312 3.596-3.422 3.596H6.92C4.811 21 3.5 19.513 3.5 17.405v-5.687c0-2.107 1.318-3.596 3.421-3.596"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.383 12.692-3.888 3.186m2.78-5.885-5.823 4.78m3.706-6.652-4.47 3.671"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.078 3h-6.036c-2.103 0-3.42 1.489-3.42 3.596v5.687c0 2.108 1.31 3.597 3.42 3.597h6.035c2.11 0 3.423-1.49 3.423-3.597V6.596C21.5 4.49 20.187 3 18.078 3"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystIntersectTwoTone;
