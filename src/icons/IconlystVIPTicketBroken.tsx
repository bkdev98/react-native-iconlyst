import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVIPTicketBroken = ({
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
      d="m10.643 9.82-1.592 4.361-1.592-4.36M12.921 9.82v4.361M15.49 12.468V9.82h1.533a1.324 1.324 0 0 1 0 2.648zm0 0v1.619"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.246 10.103V9.11c.001-1.082.001-1.624-.126-2.066a3.24 3.24 0 0 0-2.212-2.213c-.441-.128-.983-.128-2.065-.128H7.656c-1.085 0-1.627 0-2.07.129a3.24 3.24 0 0 0-2.208 2.207c-.128.443-.128.986-.128 2.07 0 .233 0 .35.014.419.048.242.062.266.254.42.055.045.262.153.674.369a1.88 1.88 0 0 1 1.019 1.68 1.89 1.89 0 0 1-1.019 1.686c-.413.218-.619.326-.674.37-.192.156-.206.179-.254.42-.013.07-.013.186-.013.419-.001 1.084-.001 1.626.128 2.069a3.24 3.24 0 0 0 2.208 2.209c.443.128.985.128 2.069.128h9.193c1.08 0 1.62 0 2.06-.127a3.24 3.24 0 0 0 2.214-2.213c.127-.441.127-.981.127-2.06v-1.215M12.92 6.974v-2.27M12.92 19.299v-2.272"
    />
  </Svg>
);
export default IconlystVIPTicketBroken;
