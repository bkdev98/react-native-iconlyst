import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallSilentBoldsharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m6.208 16.26 3.384-3.834-.197-.316a7.9 7.9 0 0 1-.812-1.728l1.699-2.95-3.698-5.08-.391.23C4.61 3.508 3.45 4.67 2.542 6.232l-.06.16c-.475 2.542.84 6.232 3.355 9.4zM16.886 14.032l-2.945 1.695a9 9 0 0 1-2.048-1.052l7.971-8.502-1.094-1.026L3.128 21.83l1.095 1.026 4.158-4.436c2.06 1.754 5.142 3.592 9.058 3.592q.284 0 .575-.013l.119-.006.102-.058c1.604-.898 2.767-2.062 3.663-3.663l.215-.385z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCallSilentBoldsharp;
