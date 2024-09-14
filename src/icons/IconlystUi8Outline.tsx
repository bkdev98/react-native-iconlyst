import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUI8Outline = ({
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
      d="M8.861 3.584a3.5 3.5 0 0 1 3.435 0l.912.512a.75.75 0 0 1-.735 1.308l-.912-.513a2 2 0 0 0-1.965 0L4.83 7.571c-.66.37-1.08 1.09-1.08 1.882v5.095c0 .792.42 1.511 1.08 1.882l4.766 2.68a2 2 0 0 0 1.965 0l4.766-2.68c.66-.37 1.08-1.09 1.08-1.882v-1.105a.75.75 0 0 1 1.5 0v1.105c0 1.32-.7 2.546-1.845 3.19l-4.766 2.679a3.5 3.5 0 0 1-3.435 0l-4.766-2.68a3.65 3.65 0 0 1-1.845-3.19V9.454c0-1.32.701-2.546 1.845-3.19z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.846 5.172a2.404 2.404 0 1 0 0 4.807 2.404 2.404 0 0 0 0-4.807m-3.904 2.404a3.904 3.904 0 1 1 7.808 0 3.904 3.904 0 0 1-7.808 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUI8Outline;
