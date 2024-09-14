import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBasketBulk = ({
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
      d="M19.961 9.1c-.44-.23-.96-.36-1.58-.4l-.38-2.37c-.1-.65-.66-1.12-1.32-1.12h-.5c-.27.54-.83.91-1.48.91h-5.4c-.65 0-1.21-.37-1.48-.91h-.5c-.66 0-1.22.47-1.32 1.12l-.38 2.37c-.62.04-1.15.18-1.59.4l.49-3a2.82 2.82 0 0 1 2.8-2.39h.5c.27-.54.83-.92 1.48-.92h5.4c.65 0 1.2.38 1.48.92h.5c1.41 0 2.58 1 2.8 2.39z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.861 9.84a2.7 2.7 0 0 0-.9-.74c-.44-.23-.96-.36-1.58-.4-.14-.02-.28-.02-.43-.02h-11.9c-.15 0-.29 0-.43.02-.62.04-1.15.18-1.59.4-.35.19-.65.43-.89.73-.66.83-.81 2.02-.46 3.53l.97 4.64c.41 2.22 2.04 3.21 3.47 3.21h9.76c1.43 0 3.06-.99 3.47-3.19l.96-4.65c.36-1.52.21-2.71-.45-3.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.564 17.527a.75.75 0 0 1-.75-.75V13.11a.75.75 0 0 1 1.5 0v3.667a.75.75 0 0 1-.75.75M12.702 17.527a.75.75 0 0 1-.75-.75V13.11a.75.75 0 0 1 1.5 0v3.667a.75.75 0 0 1-.75.75M8.843 17.527a.75.75 0 0 1-.75-.75V13.11a.75.75 0 0 1 1.5 0v3.667a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShoppingBasketBulk;
