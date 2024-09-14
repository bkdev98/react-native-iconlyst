import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageChatLikeHeart1Bulk = ({
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
      d="M19.95 6.13a9.55 9.55 0 0 0-6.92-3.614 9.5 9.5 0 0 0-7.272 2.761c-2.81 2.808-3.575 7.117-1.916 10.7.11.272.443.892.99 1.842a.46.46 0 0 1-.023.502c-.222.313-.502.717-.723 1.043a1.373 1.373 0 0 0 1.139 2.137h7.254a9.5 9.5 0 0 0 7.267-3.387c2.9-3.42 2.985-8.46.204-11.984"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.237 10.222A2.44 2.44 0 0 0 14.7 8.786a2.56 2.56 0 0 0-1.21-.086c-.372.062-.709.285-.991.491-.273-.198-.618-.424-.991-.487a2.6 2.6 0 0 0-1.21.082c-1.551.502-2.03 2.2-1.595 3.55.675 2.168 3.584 3.546 3.708 3.603a.21.21 0 0 0 .176 0c.121-.056 2.988-1.41 3.704-3.6v-.001c.23-.714.21-1.465-.054-2.116"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessageChatLikeHeart1Bulk;
