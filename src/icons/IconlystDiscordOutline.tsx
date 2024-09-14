import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscordOutline = ({
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
      d="M16.04 19.394c-.41 0-.82-.28-1.05-.55-.26-.28-.73-.99-1.07-1.52a.747.747 0 0 1 .22-1.04c.35-.22.81-.13 1.04.22.43.66.79 1.18.94 1.35.01.01.02.02.01.02 1.57-.21 2.72-.68 3.62-1.48.39-.34.52-.62.49-1.02-.18-2.4-.71-4.68-1.62-6.96q-.51-1.26-1.74-1.68c-.61-.26-1.21-.43-1.78-.53l-.16-.03c-.12-.02-.25-.04-.35-.06-.03.1-.06.21-.08.27-.1.36-.45.6-.82.55-1.12-.15-2.27-.15-3.39 0a.73.73 0 0 1-.82-.55c-.02-.06-.05-.17-.08-.27-.1.01-.23.04-.35.06l-.17.03c-.56.1-1.16.27-1.73.51-.87.3-1.45.86-1.79 1.7-.91 2.28-1.44 4.55-1.62 6.96-.03.4.1.68.49 1.02.91.81 2.06 1.28 3.61 1.48.16-.17.4-.49.97-1.37.23-.35.69-.45 1.04-.22s.45.69.22 1.04c-.53.81-.87 1.3-1.09 1.53-.25.29-.73.6-1.22.52-1.87-.22-3.36-.83-4.52-1.86-.73-.64-1.06-1.38-.99-2.26.2-2.56.76-4.98 1.73-7.4.5-1.25 1.42-2.12 2.65-2.54a9.7 9.7 0 0 1 2.01-.59l.17-.03c1.06-.18 1.56-.11 1.91.68.85-.08 1.7-.08 2.56 0 .35-.79.85-.87 1.92-.68l.16.03c.68.12 1.39.33 2.06.61 1.18.4 2.1 1.28 2.6 2.52.97 2.42 1.53 4.84 1.73 7.4.07.87-.26 1.61-.99 2.26-1.16 1.03-2.65 1.64-4.56 1.86-.05 0-.1.01-.15.01zm0-1.5h-.06zm-8.07 0H8z"
    />
    <Path
      fill={props.color}
      d="M12 18.054c-1.75 0-3.5-.52-5.24-1.55a.75.75 0 0 1-.26-1.03c.21-.36.67-.47 1.03-.26 3.01 1.79 5.93 1.79 8.94 0 .36-.21.82-.09 1.03.26.21.36.1.82-.26 1.03-1.74 1.04-3.49 1.55-5.24 1.55M9.16 14.213c-1.1 0-2-1-2-2.22s.9-2.21 2-2.21 2 .99 2 2.21-.9 2.22-2 2.22m0-2.93c-.27 0-.5.33-.5.71 0 .42.26.72.5.72.27 0 .5-.34.5-.72s-.23-.71-.5-.71M14.84 14.213c-1.1 0-2-1-2-2.22s.9-2.21 2-2.21 2 .99 2 2.21-.9 2.22-2 2.22m0-2.93c-.27 0-.5.33-.5.71s.23.72.5.72.5-.34.5-.72-.23-.71-.5-.71"
    />
  </Svg>
);
export default IconlystDiscordOutline;