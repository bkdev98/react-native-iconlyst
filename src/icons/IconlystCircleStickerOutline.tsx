import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleStickerOutline = ({
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
      d="M12.267 21.746h-.137a9.765 9.765 0 0 1-.738-19.49 2.51 2.51 0 0 1 1.98.754l7.869 7.87a2.5 2.5 0 0 1 .753 1.978 9.8 9.8 0 0 1-9.727 8.888m-.673-18h-.07a8.3 8.3 0 0 0-7.52 8.351 8.423 8.423 0 0 0 8.147 8.145h.116a8.3 8.3 0 0 0 8.234-7.52 1.02 1.02 0 0 0-.32-.788l-7.87-7.869a1.04 1.04 0 0 0-.717-.319"
    />
    <Path
      fill={props.color}
      d="M21.102 12.73h-.006c-6.755-.052-9.532-2.83-9.584-9.584a.75.75 0 0 1 .744-.755h.006a.75.75 0 0 1 .75.744c.046 5.93 2.164 8.049 8.1 8.1a.75.75 0 0 1-.005 1.5z"
    />
  </Svg>
);
export default IconlystCircleStickerOutline;
