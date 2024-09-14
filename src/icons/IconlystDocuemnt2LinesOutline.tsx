import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocuemnt2LinesOutline = ({
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
      d="M8.386 2.25h5.65c.761 0 1.491.31 2.02.86l3.792 3.95c.499.521.78 1.216.78 1.938v8.163a4.563 4.563 0 0 1-4.378 4.588h-.017l-.013.001-7.926-.001h-.017a4.504 4.504 0 0 1-4.403-4.593V6.639A4.496 4.496 0 0 1 8.386 2.25m7.818 18a3.063 3.063 0 0 0 2.923-3.081V8.998a1.3 1.3 0 0 0-.362-.9l-3.792-3.949a1.3 1.3 0 0 0-.937-.399H8.38a2.996 2.996 0 0 0-3.007 2.916V17.18a3.004 3.004 0 0 0 2.929 3.069z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.422 11.672a.75.75 0 0 1 .75-.75h3.291a.75.75 0 1 1 0 1.5H9.172a.75.75 0 0 1-.75-.75m.001 3.68a.75.75 0 0 1 .75-.75h5.296a.75.75 0 0 1 0 1.5H9.173a.75.75 0 0 1-.75-.75M14.52 2.313a.75.75 0 0 1 .75.75v2.892a1.81 1.81 0 0 0 1.805 1.81h2.738a.75.75 0 0 1 0 1.5h-2.741a3.31 3.31 0 0 1-3.302-3.31V3.063a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocuemnt2LinesOutline;
