import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReels2Bulk = ({
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
      d="M21.16 7.54v8.92c0 .17-.01.33-.02.49a5.9 5.9 0 0 1-.3 1.5c-.56 1.6-1.83 2.68-3.55 2.97-.3.05-.61.08-.94.08h-8.7c-.35 0-.68-.03-.99-.08-1.69-.31-2.94-1.38-3.5-2.97-.16-.45-.26-.95-.3-1.49-.01-.16-.02-.33-.02-.5V7.54c0-.17.01-.33.02-.49q.06-.81.3-1.5c.56-1.58 1.81-2.66 3.5-2.97.31-.05.64-.08.99-.08h8.7c.33 0 .64.03.94.08 1.72.29 2.99 1.37 3.55 2.97q.24.69.3 1.5c.01.16.02.32.02.49"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.86 16.96c.04.54.14 1.04.3 1.49h3.5v2.97c.31.05.64.08.99.08h.51v-3.05h3.07v3.05h1.5v-3.05h3.06v3.05h.56c.33 0 .64-.03.94-.08v-2.97h3.55q.24-.69.3-1.5H2.9c-.01 0-.03 0-.04.01M21.14 7.05a5.9 5.9 0 0 0-.3-1.5h-3.55V2.58c-.3-.05-.61-.08-.94-.08h-.56v3.05h-3.06V2.5h-1.5v3.05H8.16V2.5h-.51c-.35 0-.68.03-.99.08v2.97h-3.5q-.24.69-.3 1.5zM13.97 12c0 .2-.13.37-.25.48-.72.64-1.55 1.16-2.4 1.5-.19.08-.36.08-.47.02-.13-.07-.16-.24-.17-.32-.12-1.17-.12-2.3-.01-3.34.02-.12.06-.26.19-.34.05-.03.12-.04.19-.04.08 0 .17.02.26.05.94.4 1.73.89 2.41 1.51.12.11.25.28.25.48m-3.86-3.3c-.51.3-.84.81-.92 1.46-.14 1.16-.14 2.4 0 3.69.08.63.39 1.14.89 1.44.28.17.61.25.95.25.27 0 .56-.05.85-.16 1.01-.41 1.99-1.03 2.85-1.79 0 0 0-.01.01-.01.47-.44.74-1 .73-1.59 0-.58-.26-1.14-.74-1.57-.8-.74-1.76-1.34-2.85-1.79-.6-.25-1.25-.23-1.77.07"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReels2Bulk;
