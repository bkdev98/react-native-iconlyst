import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystContacts1Bulk = ({
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
      d="M5.327 3.881c.906-.95 2.217-1.44 3.833-1.436h8.061c1.615 0 2.929.493 3.836 1.444.903.947 1.343 2.284 1.343 3.856v8.508c0 1.57-.448 2.908-1.366 3.855-.921.95-2.252 1.444-3.89 1.444H9.16c-1.616 0-2.928-.495-3.832-1.447-.901-.948-1.339-2.285-1.339-3.852V7.736c0-1.571.437-2.909 1.34-3.855"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.47 15.593c0 2 3.1 2 4.2 2s4.2 0 4.2-2c0-.4-.1-.8-.4-1.1-.6-.6-1.7-.9-3.8-.9-1.1 0-4.2 0-4.2 2M16.57 9.293c0-1.6-1.3-2.9-2.9-2.9s-2.9 1.3-2.9 2.9 1.3 2.9 2.9 2.9 2.9-1.3 2.9-2.9M2.9 6.93a1 1 0 1 0 0 2h3.311a1 1 0 0 0 0-2zM2.9 15.056a1 1 0 1 0 0 2h3.311a1 1 0 1 0 0-2z"
    />
  </Svg>
);
export default IconlystContacts1Bulk;
