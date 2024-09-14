import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainLikeOutline = ({
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
      d="M13.898 22.278s-.09 0-.14-.01a.754.754 0 0 1-.6-.87c.04-.21.41-2.04 1.69-2.71.37-.19.82-.05 1.01.31.19.37.05.82-.32 1.01-.5.26-.83 1.23-.91 1.66a.75.75 0 0 1-.74.61z"
    />
    <Path
      fill={props.color}
      d="m16.888 20.469-2.8-.63c-1.2-.26-1.41-1.24-1.56-1.95a8 8 0 0 0-.11-.46c-.11-.4.12-.81.52-.92.41-.11.81.12.92.52.05.19.09.37.13.55.15.72.21.76.42.8l2.79.63c.12.03.25.01.32-.04.06-.04.09-.11.11-.21l.31-2.62c.11-.6.48-1.04.99-1.23l.92-.36c-1.31-1.8-1.82-3.27-1.54-4.54.45-2.04-.24-3.75-2.17-5.38-1.14-.96-2.62-1.4-4.62-1.35h-.02c-.41 0-.74-.32-.75-.73 0-.41.32-.76.73-.77 2.4-.05 4.19.49 5.62 1.7 2.37 2 3.24 4.24 2.66 6.85-.18.8.25 1.91 1.28 3.29.29.39.38.88.25 1.33s-.47.81-.92.99l-.93.36-.35 2.65c-.08.54-.34.97-.74 1.25-.44.307-.954.364-1.46.27M5.847 10.01c-.12 0-.25-.03-.36-.09s-2.67-1.48-3.32-3.48c-.5-1.58.24-3.18 1.68-3.65.66-.21 1.38-.16 2 .14.61-.29 1.33-.35 1.99-.14 1.46.47 2.2 2.07 1.69 3.65-.61 1.95-3.04 3.33-3.32 3.48-.11.06-.24.09-.36.09m-1.54-5.79c-.75.24-.93 1.09-.72 1.76.32 1 1.52 1.94 2.25 2.41.74-.47 1.94-1.42 2.25-2.4.22-.67.04-1.52-.72-1.76-.37-.12-.77-.05-1.08.19-.26.2-.63.2-.9 0-.31-.23-.72-.3-1.09-.18zM5.198 22.038q-.15 0-.3-.06a.76.76 0 0 1-.39-.99c1.01-2.31.72-4.91-.85-7.73-.2-.36-.07-.82.29-1.02s.82-.07 1.02.29c1.79 3.21 2.11 6.35.92 9.07-.12.28-.4.45-.69.45z"
    />
  </Svg>
);
export default IconlystAiBrainLikeOutline;