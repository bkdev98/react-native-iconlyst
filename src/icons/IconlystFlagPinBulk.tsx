import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlagPinBulk = ({
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
      d="M15.593 13.037a.76.76 0 0 0-.87.607.75.75 0 0 0 .607.87c3.142.56 4.785 1.792 4.785 2.72 0 1.423-3.468 3.015-8.11 3.015-4.647 0-8.12-1.592-8.12-3.016 0-.92 1.645-2.15 4.788-2.72a.75.75 0 0 0-.267-1.476c-3.714.673-6.021 2.28-6.021 4.196 0 2.575 4.136 4.516 9.62 4.516 5.479 0 9.61-1.94 9.61-4.516 0-1.926-2.307-3.534-6.022-4.196"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 17.46a.75.75 0 0 0 .75-.75V9.675l4.711-.09a.75.75 0 0 0 .706-.536l1.038-3.5a.75.75 0 0 0-.465-.918l-6.486-2.337A.752.752 0 0 0 11.25 3v13.71c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlagPinBulk;
