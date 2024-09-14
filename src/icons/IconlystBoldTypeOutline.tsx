import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoldTypeOutline = ({
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
      d="M12.454 13.516H7.792a.75.75 0 0 1-.75-.75v-7a.75.75 0 0 1 .75-.75h4.512a4.365 4.365 0 0 1 4.38 3.835 4.25 4.25 0 0 1-4.23 4.665m-3.912-1.5h3.912a2.753 2.753 0 0 0 2.737-3.022 2.853 2.853 0 0 0-2.887-2.478H8.542z"
    />
    <Path
      fill={props.color}
      d="M13.708 20.516H7.792a.75.75 0 0 1-.75-.75v-7a.75.75 0 0 1 .75-.75h5.765a4.367 4.367 0 0 1 4.381 3.835 4.25 4.25 0 0 1-4.23 4.665m-5.166-1.5h5.166a2.753 2.753 0 0 0 2.737-3.023 2.855 2.855 0 0 0-2.888-2.477H8.542z"
    />
  </Svg>
);
export default IconlystBoldTypeOutline;
