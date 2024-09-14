import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasLampBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M16.509 11.418c-.1.09-.14.22-.12.34l.52 2.94c.12.77-.4 1.49-1.16 1.62-.3.04-.62-.01-.88-.15l-1.22-.63-1.46-.76a.42.42 0 0 0-.38 0l-1.47.76-1.21.63a1.407 1.407 0 0 1-1.89-.58c-.14-.27-.19-.58-.14-.88l.51-2.95a.4.4 0 0 0-.11-.34l-2.18-2.08c-.26-.26-.41-.61-.42-.98s.13-.72.39-.99c.21-.22.51-.37.82-.41l2.99-.43c.13-.02.25-.1.31-.22l1.34-2.68c.17-.34.47-.58.83-.7.35-.11.74-.08 1.07.09.26.14.47.35.6.61h.01l1.34 2.68c.06.12.17.2.3.22l3 .43c.36.05.69.24.91.53a1.374 1.374 0 0 1-.13 1.84z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.759 21.927c-.19.27-.5.44-.83.44h-5.86c-.33 0-.64-.17-.83-.45a.99.99 0 0 1-.1-.93l2.2-5.45 1.47-.76c.12-.06.26-.06.38 0l1.46.76 2.21 5.45c.12.31.08.66-.1.94"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasLampBulk;
