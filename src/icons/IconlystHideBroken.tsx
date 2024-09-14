import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHideBroken = ({
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
      d="M9.76 14.367a3.12 3.12 0 0 1-.925-2.23A3.16 3.16 0 0 1 12 8.973c.867 0 1.665.35 2.23.925M15.105 12.699a3.16 3.16 0 0 1-2.537 2.542"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.655 17.472c-1.587-1.246-2.931-3.066-3.905-5.335.984-2.279 2.337-4.109 3.934-5.365C8.27 5.516 10.1 4.834 11.999 4.834c1.91 0 3.74.692 5.336 1.957M19.447 8.99a15.4 15.4 0 0 1 1.802 3.147c-1.967 4.557-5.443 7.302-9.25 7.302-.863 0-1.714-.14-2.532-.413M19.887 4.25 4.113 20.024"
    />
  </Svg>
);
export default IconlystHideBroken;
