import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeAfterEffectsSquareOutline = ({
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
      d="M15.99 16.127c-.82 0-1.57-.31-2.12-.9-.49-.53-.82-1.27-.88-2v-.1c-.04-.71.16-1.38.54-1.91.49-.68 1.28-1.09 2.1-1.11.67.01 1.33.24 1.83.7.49.45.8 1.06.89 1.72.01.11.02.39.02.39 0 .54-.42.96-.94.96h-2.71c.07.12.15.24.24.33.63.67 1.55.38 1.91.22.38-.17.82 0 .99.39.17.38 0 .82-.39.99-.5.22-1.01.33-1.5.33zm-1.4-3.75h2.18c-.07-.18-.18-.34-.32-.46-.22-.2-.51-.31-.79-.3-.35 0-.71.2-.92.49-.06.08-.11.18-.15.28zM11.88 16.107c-.29 0-.57-.17-.69-.46l-2.06-5.01-2.06 5.01a.751.751 0 1 1-1.39-.57l2.75-6.69c.23-.56 1.16-.56 1.39 0l2.75 6.69c.16.38-.02.82-.41.98-.09.04-.19.06-.29.06z"
    />
    <Path
      fill={props.color}
      d="M10.89 13.717H7.35c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.54c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </Svg>
);
export default IconlystAdobeAfterEffectsSquareOutline;
