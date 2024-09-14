import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordViewLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.382 11.026V8.864c0-2.844-1.772-4.854-4.619-4.854H7.617c-2.838 0-4.618 2.01-4.618 4.854v3.916c0 2.844 1.771 4.854 4.618 4.854h2.408M17.294 20.557c1.526 0 2.92-1.096 3.707-2.925-.786-1.827-2.181-2.923-3.707-2.923-1.523 0-2.92 1.096-3.705 2.923.786 1.83 2.182 2.925 3.707 2.925zM17.3 17.58v.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.69 10.772v-.064zm-.26-.014a.26.26 0 1 1 .522 0 .26.26 0 0 1-.521 0M15.594 10.772v-.064zm-.259-.014a.26.26 0 1 1 .52 0 .26.26 0 0 1-.52 0M7.785 10.772v-.064zm-.259-.014a.26.26 0 0 1 .26-.26.26.26 0 1 1-.26.26"
    />
  </Svg>
);
export default IconlystPasswordViewLight;
