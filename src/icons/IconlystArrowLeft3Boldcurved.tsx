import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeft3Boldcurved = ({
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
      d="M20.425 11h-8.227c-.066-1.908-.319-3.629-.762-4.073-.563-.563-1.496-.277-2.248.034-1.571.65-6.113 3.396-6.113 5.046 0 1.703 4.747 4.438 6.188 5.035.451.187.933.352 1.361.352.309 0 .59-.085.813-.309.444-.446.697-2.173.762-4.085h8.226a1 1 0 1 0 0-2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowLeft3Boldcurved;
