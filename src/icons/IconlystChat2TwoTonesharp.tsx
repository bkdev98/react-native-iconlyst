import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChat2TwoTonesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M18.798 18.661a9.2 9.2 0 0 1-6.723 2.701C8.78 21.292 3 21.342 3 21.342s.05-5.846.048-9.199a9.2 9.2 0 0 1 2.704-6.53c3.599-3.6 9.447-3.6 13.046 0 3.606 3.606 3.6 9.449 0 13.048Z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M8.565 12.52h-.1M12.299 12.52H12.2M16.033 12.52h-.099"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystChat2TwoTonesharp;
