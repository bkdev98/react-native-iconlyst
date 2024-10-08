import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMachineOutline = ({
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
      d="M7.198 13.622c-.16 0-.33-.03-.49-.08-.2-.07-.37-.15-.54-.23-.45-.2-.77-.63-.85-1.14l-.1-.73-.02-.02-.74-.11c-.48-.06-.91-.38-1.13-.85-.08-.16-.15-.35-.22-.53-.17-.47-.09-.99.21-1.39l.46-.6-.46-.61c-.3-.4-.38-.93-.21-1.4.07-.18.14-.37.22-.54.21-.44.62-.75 1.12-.83l.75-.11.12-.75c.07-.5.39-.93.86-1.14.16-.07.33-.15.51-.22.48-.16.99-.09 1.39.19l.62.48.61-.46c.42-.3.93-.37 1.39-.21.2.07.37.15.54.23.46.2.78.63.85 1.14l.1.73s.02.01.02.02l.73.11c.5.08.92.4 1.13.84.08.17.16.35.22.54.17.47.09.99-.2 1.39l-.46.61.46.61c.3.4.38.92.21 1.4-.06.18-.14.37-.22.54-.21.46-.64.78-1.14.84l-.7.1-.15.76c-.07.5-.39.93-.86 1.14-.16.07-.33.15-.51.22-.48.16-.99.09-1.38-.19l-.63-.48-.61.46c-.28.19-.59.29-.9.29zm1.51-2.24c.32 0 .63.1.89.27l.63.48c.12-.06.26-.12.39-.19l.1-.73c.05-.32.2-.62.42-.84.01-.01.02-.02.04-.03.22-.22.51-.36.83-.41l.74-.11c.05-.13.11-.26.16-.4l-.45-.59c-.2-.28-.3-.58-.3-.89 0-.34.1-.66.29-.92l.46-.61c-.06-.12-.11-.26-.17-.39l-.74-.11c-.29-.03-.56-.17-.79-.38l-.06-.06c-.24-.25-.38-.54-.42-.85l-.11-.73c-.12-.05-.26-.11-.41-.16l-.58.45c-.51.39-1.33.38-1.83 0l-.6-.46c-.12.06-.26.12-.39.19l-.09.72c-.04.31-.18.6-.42.84-.02.02-.04.04-.07.06-.23.21-.51.35-.82.38l-.72.11c-.06.13-.11.27-.16.4l.45.58c.2.27.29.57.3.89 0 .35-.1.67-.29.93l-.46.61c.06.12.11.25.17.38l.74.11c.29.04.57.17.8.38.02.02.04.04.07.06.24.25.38.53.42.85l.11.74c.12.05.26.11.41.16l.58-.45c.28-.2.6-.29.91-.29z"
    />
    <Path
      fill={props.color}
      d="M8.708 10.632q-.21 0-.42-.03a2.73 2.73 0 0 1-2.25-2.25c-.13-.87.14-1.72.76-2.33.62-.62 1.47-.9 2.33-.76 1.15.18 2.07 1.11 2.25 2.25a2.7 2.7 0 0 1-2.67 3.13zm0-3.91c-.32 0-.62.12-.85.35-.27.27-.4.66-.34 1.05.08.5.49.91.99.99.39.06.76-.06 1.04-.34s.4-.66.34-1.05c-.08-.5-.5-.91-.99-.99-.06 0-.12-.01-.19-.01M15.888 18.883c-.2 0-.4-.04-.59-.13-.22-.09-.46-.23-.72-.41-.39-.29-.6-.71-.59-1.18v-.42l-.34-.17c-.41-.23-.68-.65-.73-1.11-.03-.26-.03-.54 0-.81.04-.46.31-.88.72-1.11l.38-.21-.03-.39c0-.46.21-.89.57-1.17.27-.19.51-.33.75-.43.42-.19.92-.16 1.31.1l.33.19.34-.21c.37-.24.87-.27 1.3-.07.22.09.47.23.72.41.39.29.6.71.59 1.17v.41l.33.19c.42.24.68.65.73 1.12.03.26.03.54 0 .81-.04.46-.31.88-.72 1.11l-.38.21.03.39c0 .46-.21.89-.57 1.17-.27.19-.51.33-.75.43-.42.19-.92.15-1.31-.1l-.33-.19-.34.21c-.21.13-.45.2-.71.2zm-.07-1.49h-.01zm.05-4.62c-.14.07-.28.15-.43.25l.06.34c0 .25-.06.5-.19.74q-.24.405-.57.57l-.36.2c.03.12.03.29.05.45l.32.15c.22.11.41.31.56.55.14.25.21.5.2.75v.42c.1.04.24.11.38.17l.33-.19c.4-.26 1.08-.27 1.52.01l.31.18c.14-.06.28-.15.43-.25l-.06-.34c0-.25.06-.5.2-.74.17-.27.35-.45.57-.57l.36-.2c-.03-.12-.03-.29-.05-.45l-.32-.15c-.22-.12-.41-.31-.55-.55-.14-.25-.2-.5-.2-.76v-.42c-.1-.03-.24-.11-.38-.17l-.33.19c-.41.26-1.07.27-1.52-.01l-.31-.18z"
    />
    <Path
      fill={props.color}
      d="M16.948 16.022a.96.96 0 0 1-.96-.96c0-.25.1-.49.28-.67s.43-.29.69-.29a.96.96 0 0 1 0 1.92zM8.818 21.742c-.41 0-.75-.34-.75-.75v-.27c-.36-.11-.71-.3-1-.58l-.23.13a.752.752 0 1 1-.76-1.3l.24-.14c-.09-.38-.09-.77 0-1.15l-.24-.14a.752.752 0 1 1 .76-1.3l.23.13c.29-.27.63-.47 1-.58v-.27c0-.41.34-.75.75-.75s.75.34.75.75v.27c.37.11.71.31 1 .58l.23-.13a.752.752 0 1 1 .76 1.3l-.24.14c.09.38.09.77 0 1.15l.24.14a.752.752 0 1 1-.76 1.3l-.23-.13c-.29.28-.64.47-1 .58v.27c0 .41-.34.75-.75.75m-.04-4.54c-.27.01-.52.12-.71.31-.42.42-.42 1.09 0 1.51.2.2.45.3.71.31h.09c.26-.01.51-.11.71-.31.42-.42.42-1.09 0-1.51-.19-.19-.44-.3-.71-.31z"
    />
  </Svg>
);
export default IconlystMachineOutline;
