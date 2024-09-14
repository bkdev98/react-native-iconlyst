import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleTicketBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M9.275 18.72a4.574 4.574 0 0 1-3.223-5.586l1.82-6.835a.3.3 0 0 0-.29-.377h-1.18a3.567 3.567 0 0 0-3.566 3.56v8.49c0 1.969 1.6 3.57 3.567 3.57h6.016c.83 0 1.56-.44 1.97-1.097.105-.168-.016-.372-.21-.41a4 4 0 0 1-.283-.065z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m18.525 3.824-4.611-1.24a3.56 3.56 0 0 0-2.712.355A3.54 3.54 0 0 0 9.54 5.107l-2.184 8.2a3.573 3.573 0 0 0 2.518 4.362l4.62 1.25q.463.125.93.125c.618 0 1.226-.163 1.775-.48a3.54 3.54 0 0 0 1.66-2.169l2.186-8.21a3.575 3.575 0 0 0-2.52-4.36"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoubleTicketBulk;
