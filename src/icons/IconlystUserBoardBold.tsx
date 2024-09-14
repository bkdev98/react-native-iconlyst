import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserBoardBold = ({
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
      d="M17.499 3.05h-7.8c-2.1 0-3.8 1.1-4.7 3-.1.2 0 .4.1.5.1.2.3.2.5.2 1.3-.4 4.3.2 5.6 2.8 1.5 3 .1 5.1-.6 5.7-.1.1-.2.3-.2.5s.1.3.3.4c1 .4 2.7 1.7 2.7 4 0 .3.2.5.5.5h3.5c3.1 0 5.2-2.2 5.2-5.4v-6.7c.1-3.3-2-5.5-5.1-5.5m-1.3 14.402h2.3c.4 0 .8-.4.8-.8 0-.5-.4-.8-.8-.8h-2.3c-.5 0-.8.4-.8.8 0 .5.4.8.8.8"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M9.599 12.052c0 1.8-1.4 3.2-3.2 3.2s-3.2-1.4-3.2-3.2 1.4-3.2 3.2-3.2 3.2 1.4 3.2 3.2M1.699 20.452c0-1.8 1.5-3.6 4.7-3.6s4.7 1.8 4.7 3.6c0 .3-.2.5-.5.5h-8.4c-.3 0-.5-.2-.5-.5"
    />
  </Svg>
);
export default IconlystUserBoardBold;
