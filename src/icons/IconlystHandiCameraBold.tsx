import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHandiCameraBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M13.702 11.333c0 .56-.45 1-1 1s-1-.44-1-1c0-.55.45-1 1-1s1 .45 1 1m8.258-2.69a1.64 1.64 0 0 0-1.121-.604 1.67 1.67 0 0 0-1.218.371l-1.79 1.46c-.195.159-.503.018-.555-.229-.308-1.455-1.655-2.584-3.088-2.833a.32.32 0 0 1-.235-.176l-.461-1a3.05 3.05 0 0 0-2.757-1.765H7.826a.75.75 0 0 0 0 1.5h2.909c.596 0 1.143.351 1.395.894l.021.046a.3.3 0 0 1-.272.426H7.302c-2.37 0-3.97 1.67-3.97 4.14v5.11c0 2.49 1.6 4.15 3.97 4.15h6.11c2.162 0 3.683-1.381 3.934-3.514.03-.252.33-.392.526-.23l1.736 1.426c.302.246.676.382 1.052.382.915 0 1.662-.744 1.665-1.659l.01-6.839a1.67 1.67 0 0 0-.375-1.057"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHandiCameraBold;
