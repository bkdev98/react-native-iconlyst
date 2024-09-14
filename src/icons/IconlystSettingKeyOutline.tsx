import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSettingKeyOutline = ({
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
      d="M6.515 16.333c-1.08 0-2.1-.42-2.86-1.19a4.044 4.044 0 0 1 0-5.72 4.044 4.044 0 0 1 5.72 0c.1.1.2.21.3.34h3.85c.31 0 .6.12.81.34l1.29 1.29c.22.22.34.51.34.81s-.12.6-.34.81l-1.28 1.29c-.43.43-1.19.43-1.63 0l-.02-.02-.33.33c-.29.29-.77.29-1.06 0l-.32-.32-.03.03a.75.75 0 0 1-.53.22h-.53a4.033 4.033 0 0 1-3.36 1.8zm0-6.59c-.65 0-1.3.25-1.8.74-.99.99-.99 2.61 0 3.6.96.96 2.64.96 3.6 0 .19-.19.35-.41.47-.64a.76.76 0 0 1 .67-.41h.65l.34-.34a.75.75 0 0 1 1.06 0l.32.32.33-.33c.29-.29.77-.29 1.06 0l.31.31.79-.79-.94-.94h-4.09c-.26 0-.49-.13-.63-.35-.12-.18-.22-.32-.34-.43-.5-.5-1.15-.74-1.8-.74"
    />
    <Path
      fill={props.color}
      d="M11.775 22.033c-.17 0-.34 0-.51-.01-.69-.04-1.3-.41-1.65-.99l-.66-1.12a.54.54 0 0 0-.27-.22c-.1-.04-.23-.08-.36-.04l-1.27.32c-.66.17-1.35-.01-1.86-.47-.23-.21-.46-.44-.67-.68a.755.755 0 0 1 1.12-1.01q.27.3.57.57c.13.12.31.17.48.13l1.27-.32c.42-.11.87-.07 1.3.11s.77.47 1 .85l.66 1.12c.09.15.25.24.43.25q.405.015.81 0c.18 0 .34-.1.43-.25l.67-1.13c.22-.37.56-.66.96-.83.46-.19.9-.22 1.33-.12l1.27.33c.16.04.34 0 .48-.13q.3-.27.57-.57a.53.53 0 0 0 .13-.48l-.32-1.28c-.1-.42-.07-.87.09-1.26.19-.46.49-.8.86-1.02l1.13-.67c.15-.09.24-.25.25-.43q.015-.405 0-.81c0-.18-.1-.34-.25-.43l-1.12-.67c-.38-.22-.67-.57-.84-1-.18-.44-.21-.89-.1-1.31l.33-1.26c.04-.17 0-.35-.13-.48q-.27-.3-.57-.57a.54.54 0 0 0-.48-.13l-1.27.32c-.42.11-.87.07-1.3-.11-.44-.18-.78-.48-1-.85l-.66-1.12a.53.53 0 0 0-.43-.25c-.27-.01-.53-.01-.8 0-.18 0-.34.1-.43.25l-.67 1.12a2.1 2.1 0 0 1-.99.84h-.01c-.43.18-.88.21-1.3.1l-1.26-.33c-.17-.04-.35 0-.48.12q-.3.27-.57.57c-.28.31-.75.33-1.06.05a.746.746 0 0 1-.05-1.06c.21-.23.44-.46.68-.67.51-.46 1.21-.63 1.86-.46l1.26.33c.13.03.27 0 .35-.04.03-.01.05-.02.08-.03.02-.01.14-.08.21-.2l.67-1.12c.35-.58.96-.95 1.65-.98.32-.02.63-.01.95 0 .69.04 1.3.41 1.64.99l.66 1.12c.07.12.19.19.27.22.1.04.23.08.36.04l1.27-.32c.66-.17 1.35.01 1.86.47.23.21.46.44.67.67.46.51.63 1.21.46 1.86l-.33 1.26c-.03.13 0 .27.04.35.04.1.11.21.22.29l1.12.67c.58.35.95.96.98 1.65q.015.48 0 .96c-.04.69-.41 1.3-.99 1.64l-1.13.67q-.15.09-.21.24c-.07.16-.07.28-.05.38l.32 1.27c.17.65 0 1.35-.47 1.86-.22.24-.44.46-.68.67-.51.46-1.2.63-1.86.46l-1.27-.33a.5.5 0 0 0-.32.02c-.16.07-.25.14-.3.24l-.67 1.13c-.35.58-.96.95-1.65.98h-.44z"
    />
    <Path
      fill={props.color}
      d="M5.915 13.023c-.41 0-.76-.34-.76-.75s.33-.75.74-.75h.01c.41 0 .75.34.75.75s-.34.75-.75.75z"
    />
  </Svg>
);
export default IconlystSettingKeyOutline;
