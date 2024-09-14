import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAntenaOutline = ({
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
      d="M20.5 4.854c0-.98-1.186-1.472-1.88-.778l-5.24 5.24V20.25h6.019a1.1 1.1 0 0 0 1.1-1.101zM11.88 20.25v-9.433l-2.92 2.92v6.513zm-4.42 0v-5.013L4.325 18.37c-.694.693-.203 1.879.778 1.879zm10.1-17.235C19.198 1.377 22 2.536 22 4.854v14.295a2.6 2.6 0 0 1-2.601 2.6H5.104c-2.318 0-3.477-2.801-1.84-4.44z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAntenaOutline;
