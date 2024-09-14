import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareLockBold = ({
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
      d="M13.34 10.65a1.335 1.335 0 0 0-2.672 0c0 .427.2.82.55 1.076a.75.75 0 0 1 .266.841l-.647 1.94a.12.12 0 0 0 .018.117.13.13 0 0 0 .108.055h2.082c.057 0 .09-.03.108-.055a.12.12 0 0 0 .02-.116l-.647-1.942a.75.75 0 0 1 .266-.84c.348-.257.547-.649.547-1.077"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.595 14.034a1.633 1.633 0 0 1-1.55 2.146h-2.082a1.636 1.636 0 0 1-1.549-2.148l.493-1.478a2.85 2.85 0 0 1-.739-1.905 2.836 2.836 0 0 1 5.671 0c0 .706-.268 1.386-.736 1.905zM16.217 2.5H7.783C4.623 2.5 2.5 4.719 2.5 8.02v7.95c0 3.307 2.123 5.53 5.283 5.53h8.433c3.16 0 5.284-2.223 5.284-5.53V8.02c0-3.301-2.123-5.52-5.283-5.52"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareLockBold;
