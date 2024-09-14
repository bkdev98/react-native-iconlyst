import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerMegaphoneBulk = ({
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
      d="m13.264 16.015-7.697-1.68.013.005v4.29a3.126 3.126 0 0 0 6.25 0v-2.91zM8.7 20.25c.9 0 1.63-.73 1.63-1.62V15.4c-1.09-.226-2.112-.446-2.913-.617l-.337-.072v3.92c0 .89.73 1.62 1.62 1.62"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.43 2.3c.14-.04.28-.05.42-.05 2.11 0 3.7 3.15 3.7 7.33s-1.59 7.33-3.7 7.33c-.07 0-.15 0-.22-.02h-.04c-.04 0-.09-.01-.13-.02h-.02c-.14-.027-1.38-.282-3.004-.615l-1.172-.24-7.697-1.68C4.011 13.78 2.45 11.894 2.45 9.59c0-2.48 1.78-4.45 3.43-4.86 1.032-.26 7.707-1.642 10.4-2.2l1.11-.23z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.64 9.58c0 3.56 1.31 5.83 2.21 5.83s2.2-2.27 2.2-5.83-1.3-5.83-2.2-5.83c-.06 0-.11.01-.17.03-.89.26-2.04 2.46-2.04 5.8"
    />
  </Svg>
);
export default IconlystSpeakerMegaphoneBulk;
