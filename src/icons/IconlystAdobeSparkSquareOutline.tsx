import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeSparkSquareOutline = ({
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
      d="M16.21 21.754H7.78c-3.31 0-5.53-2.32-5.53-5.78v-7.95c0-3.45 2.22-5.78 5.53-5.78h8.44c3.31 0 5.53 2.32 5.53 5.78v7.95c0 3.45-2.22 5.78-5.53 5.78zm-8.43-18c-2.45 0-4.03 1.68-4.03 4.28v7.95c0 2.6 1.58 4.28 4.03 4.28h8.43c2.45 0 4.03-1.68 4.03-4.28v-7.95c0-2.6-1.58-4.28-4.03-4.28H7.77z"
    />
    <Path
      fill={props.color}
      d="M8.33 14.975c-.55 0-1.09-.1-1.5-.27a.75.75 0 0 1-.4-.98c.16-.38.6-.56.98-.4.55.23 1.6.23 2.08-.13.14-.1.26-.25.22-.59-.03-.28-.16-.49-.7-.72L8 11.465c-.36-.15-1.46-.62-1.61-1.93-.09-.8.2-1.5.81-1.96.96-.72 2.6-.72 3.57-.32.38.16.56.6.4.98a.75.75 0 0 1-.98.4c-.55-.23-1.6-.22-2.08.13-.14.1-.26.25-.22.59.03.27.16.49.7.72l1.01.42c.37.16 1.46.62 1.61 1.93.09.8-.19 1.5-.81 1.96-.55.41-1.32.59-2.06.59zM13.29 17.026c-.41 0-.75-.34-.75-.75v-5.99c0-.35.24-.65.57-.73.24-.06 2.35-.54 3.63.46.41.32.89.93.89 2s-.48 1.68-.89 2.01c-.79.64-1.91.7-2.7.65v1.6c0 .41-.34.75-.75.75m.75-3.85c.57.04 1.35.02 1.76-.32.14-.11.33-.32.33-.84s-.18-.71-.32-.82c-.42-.33-1.2-.34-1.77-.28v2.26"
    />
  </Svg>
);
export default IconlystAdobeSparkSquareOutline;
