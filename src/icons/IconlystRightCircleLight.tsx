import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightCircleLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.522 15.335c1.199-.483 2.777-1.496 3.648-2.286q1.194-1.047 0-2.096c-.871-.79-2.45-1.802-3.648-2.285-.976-.317-1.537.1-1.714 1.198A19 19 0 0 0 9.697 12q-.005 1.102.11 2.136c.172 1.102.74 1.507 1.715 1.198"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightCircleLight;
