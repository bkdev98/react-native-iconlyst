import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRideBikeLight = ({
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
      d="m11.712 18.07.869-2.315a2.017 2.017 0 0 0-1.124-2.574l-.667-.275a2.017 2.017 0 1 1 2.056-3.415l1.022.852c.363.302.82.467 1.291.467h2.9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.062 6.662c1.007 0 1.83-.819 1.83-1.83A1.834 1.834 0 0 0 14.063 3c-1.007 0-1.832.82-1.832 1.831s.825 1.831 1.832 1.831M6.204 21c1.52 0 2.748-1.23 2.748-2.748a2.746 2.746 0 0 0-2.748-2.75 2.746 2.746 0 0 0-2.749 2.75A2.747 2.747 0 0 0 6.204 21M17.796 21c1.52 0 2.748-1.23 2.748-2.748a2.746 2.746 0 0 0-2.748-2.75 2.746 2.746 0 0 0-2.75 2.75A2.747 2.747 0 0 0 17.797 21"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRideBikeLight;
