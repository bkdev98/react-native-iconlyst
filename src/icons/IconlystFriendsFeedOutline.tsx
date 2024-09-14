import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFriendsFeedOutline = ({
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
      d="M6.254 4.235a5 5 0 0 1 3.523-1.454h2.07c.675 0 1.22.547 1.22 1.22V6.45a1.22 1.22 0 0 1-1.22 1.22h-2.07a.12.12 0 0 0-.073.03.1.1 0 0 0-.024.068v1.79h3.793v-1.79c0-1.326.525-2.592 1.46-3.53l.003-.002a5 5 0 0 1 3.523-1.454h2.07c.674 0 1.221.547 1.221 1.22V6.45a1.22 1.22 0 0 1-1.22 1.22h-2.071a.12.12 0 0 0-.073.03.1.1 0 0 0-.024.068v1.79h2.167c.674 0 1.221.547 1.221 1.221v2.448a1.22 1.22 0 0 1-1.22 1.22h-2.168v5.556a1.22 1.22 0 0 1-1.22 1.221h-2.448a1.22 1.22 0 0 1-1.22-1.22v-5.557H9.68v5.556a1.22 1.22 0 0 1-1.221 1.221H6.012a1.22 1.22 0 0 1-1.22-1.22v-5.557H3.47a1.22 1.22 0 0 1-1.221-1.22v-2.448c0-.674.546-1.22 1.22-1.22h1.321V7.767c0-1.326.525-2.592 1.46-3.53zM7.312 5.3a3.5 3.5 0 0 0-1.02 2.468v2.54a.75.75 0 0 1-.75.75H3.75v1.89h1.791a.75.75 0 0 1 .75.75v6.026H8.18v-6.027a.75.75 0 0 1 .75-.75h5.293a.75.75 0 0 1 .75.75v6.027h1.889v-6.027a.75.75 0 0 1 .75-.75h2.638v-1.888h-2.638a.75.75 0 0 1-.75-.75V7.767c0-.43.169-.83.465-1.13l.014-.013a1.62 1.62 0 0 1 1.118-.454h1.791V4.28h-1.791c-.924 0-1.81.369-2.465 1.018a3.5 3.5 0 0 0-1.02 2.468v2.54a.75.75 0 0 1-.75.75H8.93a.75.75 0 0 1-.75-.75v-2.54c0-.43.169-.83.464-1.13l.015-.013a1.62 1.62 0 0 1 1.118-.454h1.79V4.28h-1.79c-.924 0-1.81.369-2.465 1.018"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFriendsFeedOutline;
