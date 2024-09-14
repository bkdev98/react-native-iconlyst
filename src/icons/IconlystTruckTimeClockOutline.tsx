import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruckTimeClockOutline = ({
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
      d="M7.11 4.648a3.11 3.11 0 1 0 0 6.22 3.11 3.11 0 0 0 0-6.22M2.5 7.758a4.61 4.61 0 1 1 9.22 0 4.61 4.61 0 0 1-9.22 0m10.034-1.857a.75.75 0 0 1 .75-.75h1.083a2.83 2.83 0 0 1 2.83 2.83v.532l2.947 1.3A3.12 3.12 0 0 1 22 12.663v3.443a2.83 2.83 0 0 1-2.83 2.83h-.163a2.668 2.668 0 0 1-5.12 0H9.862a2.668 2.668 0 0 1-5.137-.065A2.83 2.83 0 0 1 2.5 16.105v-3.063a.75.75 0 0 1 1.5 0v3.063c0 .539.32 1.002.78 1.211a2.668 2.668 0 0 1 5.082.118h4.025c.255-.87.94-1.555 1.81-1.81V7.981a1.33 1.33 0 0 0-1.33-1.33h-1.084a.75.75 0 0 1-.75-.75m4.663 9.723c.87.255 1.555.94 1.81 1.81h.164a1.33 1.33 0 0 0 1.329-1.329v-1.943h-1.651a.75.75 0 1 1 0-1.5H20.5c0-.638-.377-1.217-.962-1.476l-2.341-1.033zM7.089 5.714a.75.75 0 0 1 .75.75v1.143l.855.511a.75.75 0 1 1-.77 1.288l-1.22-.73a.75.75 0 0 1-.365-.644V6.464a.75.75 0 0 1 .75-.75m.214 11.303a1.167 1.167 0 1 0 0 2.334 1.167 1.167 0 0 0 0-2.334m9.144 0a1.167 1.167 0 1 0 0 2.334 1.167 1.167 0 0 0 0-2.334"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTruckTimeClockOutline;
