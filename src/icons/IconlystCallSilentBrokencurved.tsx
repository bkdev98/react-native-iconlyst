import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallSilentBrokencurved = ({
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
      d="M6.61 13.308c-4.587-5.362-3.739-7.93-3.1-8.833.094-.17 2.398-3.61 4.86-1.593 4.851 4.003 1 4.385 1.742 6.922M14.085 14.016c2.871 1.233 3.105-3.204 7.278 1.86 2.028 2.474-1.422 4.767-1.592 4.863-.997.722-4.108 1.688-10.87-4.99M2.5 21.75 21 3.25"
    />
  </Svg>
);
export default IconlystCallSilentBrokencurved;
