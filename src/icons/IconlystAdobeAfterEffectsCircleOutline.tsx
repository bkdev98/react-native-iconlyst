import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeAfterEffectsCircleOutline = ({
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
      d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M15.79 15.58c-.79 0-1.51-.3-2.04-.87a3.23 3.23 0 0 1-.84-1.93v-.1c-.03-.68.15-1.33.52-1.84.48-.65 1.24-1.05 2.03-1.07.65 0 1.28.23 1.76.67.47.43.77 1.02.86 1.66.01.11.02.37.02.37 0 .54-.42.96-.93.96h-2.51c.06.09.12.18.19.26.6.65 1.51.31 1.78.2.38-.17.82 0 .99.39.17.38 0 .82-.39.99-.49.21-.97.32-1.44.32zm-1.27-3.64h1.97c-.07-.14-.16-.27-.27-.38-.2-.18-.45-.3-.73-.28-.32 0-.65.18-.85.45q-.075.09-.12.21M11.88 15.56c-.3 0-.57-.17-.69-.46l-1.93-4.68-1.93 4.68a.751.751 0 1 1-1.39-.57l2.62-6.37c.12-.28.39-.46.69-.46s.58.18.69.46l2.62 6.37c.16.38-.03.82-.41.98-.09.04-.19.06-.28.06z"
    />
    <Path
      fill={props.color}
      d="M10.94 13.281H7.57c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.37c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </Svg>
);
export default IconlystAdobeAfterEffectsCircleOutline;
