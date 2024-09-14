import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUsersBold = ({
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
      d="M10.295 13.574q-7.2 0-7.2 4.2c0 1.6 1.2 2.8 2.7 2.8h9c1.5 0 2.6-1.1 2.7-2.8q0-4.2-7.2-4.2M18.995 13.674c-.5-.2-1.1.1-1.3.6s.1 1.1.6 1.3c1.5.5 1.7 1.3 1.7 2 0 .5-.3 1.1-1 1.1-.6 0-1 .4-1 1s.4 1 1 1c1.7 0 3-1.3 3-3.1.1-1.4-.4-3.1-3-3.9M9.995 3.873a4 4 0 1 1 0 8 4 4 0 0 1 0-8M15.495 9.973c-.5.2-.7.8-.5 1.3q.3.6.9.6c.1 0 .3 0 .4-.1 1.6-.7 2.5-2.1 2.5-3.7 0-1.7-1-3.2-2.6-3.7-.5-.2-1.1.1-1.3.6s.1 1.1.6 1.3c.7.3 1.2 1 1.2 1.9.1 1.1-.8 1.6-1.2 1.8"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUsersBold;
