import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallSendingTwoTone = ({
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
      d="M11.656 12.848c3.719 3.717 4.824-.845 7.192 1.52 2.282 2.282 3.594 2.739.702 5.63-.362.291-2.664 3.794-10.751-4.292S4.209 5.316 4.5 4.953c2.9-2.898 3.348-1.579 5.632.703 2.366 2.366-2.194 3.474 1.524 7.192"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.281 3.009 21.5 3l-.009 4.219M21.5 3l-5.242 5.241"
    />
  </Svg>
);
export default IconlystCallSendingTwoTone;
