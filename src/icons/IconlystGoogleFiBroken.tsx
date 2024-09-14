import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleFiBroken = ({
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
      d="M12.75 3h5.681a2.362 2.362 0 0 1 0 4.725H7.071A2.362 2.362 0 1 1 7.07 3h.513"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.791 5.362a2.362 2.362 0 1 1-4.724 0 2.362 2.362 0 0 1 4.724 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.791 18.638a2.362 2.362 0 1 1-4.725 0v-5.84a2.362 2.362 0 1 1 4.725 0v2.92M11.119 10.436h-4.05a2.362 2.362 0 0 0 0 4.724h4.05a2.362 2.362 0 1 0 0-4.725"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.432 15.092v-2.294a2.362 2.362 0 1 0-4.725 0v5.84a2.362 2.362 0 1 0 4.725 0v-.466"
    />
  </Svg>
);
export default IconlystGoogleFiBroken;
