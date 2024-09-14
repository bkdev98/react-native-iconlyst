import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftClickMouseBold = ({
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
      d="M11.094 8.97c.087 0 .158-.07.158-.157V2.831a.29.29 0 0 0-.328-.292 7.3 7.3 0 0 0-4.003 1.905C5.708 5.585 4.985 7.064 4.84 8.657a.29.29 0 0 0 .292.312z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.195 9.258c-.001-3.399-2.659-6.222-6.113-6.717a.29.29 0 0 0-.33.291v5.981a1.66 1.66 0 0 1-1.658 1.656h-5.99a.3.3 0 0 0-.3.3v3.9c0 3.746 3.229 6.794 7.197 6.794 1.916 0 3.719-.703 5.077-1.98 1.366-1.285 2.119-2.996 2.118-4.817z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftClickMouseBold;
