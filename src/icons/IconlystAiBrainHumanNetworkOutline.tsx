import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainHumanNetworkOutline = ({
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
      d="M5.71 22.23h-.08a.75.75 0 0 1-.67-.82c.13-1.28.35-4.91-.27-6.4l-.28-.67c-1.02-2.4-2.06-4.87-.79-7.81 1.28-2.96 4.17-4.7 7.91-4.79 2.35-.04 4.12.48 5.54 1.67 2.05 1.73 2.32 3.99 2.55 5.99.06.54.12 1.07.22 1.57.09.44.33.95.58 1.48.27.57.55 1.15.7 1.77.22 1.39-.89 1.7-1.36 1.83-.14.04-.41.12-.46.17l-.13 2.36c-.16.86-.89 1.49-1.76 1.53l-2.51.12v1.24c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.33c0-.75.58-1.36 1.33-1.4l2.61-.12c.16 0 .3-.12.35-.28l.13-2.37c.19-.99 1.07-1.24 1.54-1.37.09-.02.2-.06.29-.09-.11-.46-.34-.93-.58-1.43-.28-.6-.58-1.21-.7-1.84-.1-.54-.17-1.11-.24-1.68-.22-1.89-.43-3.67-2.03-5.02-1.12-.94-2.56-1.37-4.54-1.32C8.43 3.29 6.04 4.71 5 7.1c-1.02 2.34-.18 4.33.8 6.62l.29.68c.88 2.11.43 6.63.38 7.14-.04.39-.37.67-.74.67z"
    />
    <Path
      fill={props.color}
      d="M9.28 10.801c-1.38 0-2.51-1.13-2.51-2.51s1.13-2.51 2.51-2.51 2.51 1.13 2.51 2.51-1.13 2.51-2.51 2.51m0-3.52c-.56 0-1.01.45-1.01 1.01s.45 1.01 1.01 1.01 1.01-.45 1.01-1.01-.45-1.01-1.01-1.01M13.68 15.2c-1.38 0-2.51-1.13-2.51-2.51s1.13-2.51 2.51-2.51 2.51 1.13 2.51 2.51-1.13 2.51-2.51 2.51m0-3.52c-.56 0-1.01.45-1.01 1.01s.45 1.01 1.01 1.01 1.01-.45 1.01-1.01-.45-1.01-1.01-1.01"
    />
    <Path
      fill={props.color}
      d="M12.45 12.151c-.19 0-.38-.07-.53-.22l-1.89-1.89a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.89 1.89c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
    />
  </Svg>
);
export default IconlystAiBrainHumanNetworkOutline;
