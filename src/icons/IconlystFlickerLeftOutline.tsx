import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlickerLeftOutline = ({
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
      d="M15.476 7.41a1.916 1.916 0 0 1 2.617.702l1.692 2.933a7.176 7.176 0 0 1-12.43 7.177l-.003-.007-3.302-5.721c-.639-1.106-.255-2.575.863-3.22 1.107-.639 2.575-.255 3.22.864a.75.75 0 0 1-1.299.75.88.88 0 0 0-1.171-.315.88.88 0 0 0-.314 1.171l3.3 5.718a5.677 5.677 0 0 0 9.832-5.676L16.793 8.86a.416.416 0 0 0-.569-.153 1.29 1.29 0 0 0-.472 1.763l.035.061a.75.75 0 1 1-1.299.75l-.035-.06a2.79 2.79 0 0 1 1.021-3.813"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.947 5.132a2.36 2.36 0 0 1 3.22.864l3.749 6.498a.75.75 0 1 1-1.3.75l-3.748-6.499a.858.858 0 0 0-1.486.857.75.75 0 1 1-1.299.75 2.36 2.36 0 0 1 .864-3.22"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.318 5.211a2.36 2.36 0 0 1 2.349 1.16l3.392 5.873a.75.75 0 0 1-1.3.75L8.369 7.12a.86.86 0 0 0-1.571.206.86.86 0 0 0 .085.65l3.392 5.873a.75.75 0 1 1-1.299.75L5.583 8.727a2.36 2.36 0 0 1 1.735-3.516M16.562 2.592a.75.75 0 0 1-.221 1.037l-.991.643.643.991a.75.75 0 1 1-1.258.817l-1.052-1.62a.75.75 0 0 1 .221-1.038l1.62-1.051a.75.75 0 0 1 1.038.22"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.564 4.01a.75.75 0 0 1 .788-.708c2.019.108 4.835.994 6.287 3.257a.75.75 0 1 1-1.262.81c-1.084-1.688-3.325-2.474-5.104-2.57a.75.75 0 0 1-.71-.788"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlickerLeftOutline;
