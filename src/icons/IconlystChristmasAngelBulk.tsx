import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasAngelBulk = ({
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
      fillRule="evenodd"
      d="M9.375 4.396c.49 0 1.137-.047 1.985-.132a23 23 0 0 0 1.89-.26c.603-.114 1.428-.27 1.351-1.044a.8.8 0 0 0-.283-.527c-.186-.154-.463-.386-3.154-.115-.714.071-1.385.164-1.89.26-.603.114-1.428.27-1.35 1.05.055.542.376.768 1.451.768M11.99 10.85a2.32 2.32 0 0 1-2.31-2.32c0-1.27 1.04-2.31 2.31-2.31a2.32 2.32 0 0 1 2.32 2.31c0 1.28-1.04 2.32-2.32 2.32m.82 4.84c0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75.41 0 .75.33.75.74zm0 2.74c0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75.41 0 .75.33.75.74zm4.28-.08c0-.03 0-.07-.01-.1 0-.06-.01-.11-.02-.17v-.03c0-.03-.01-.06-.02-.09 0-.01-.01-.03-.01-.04-.27-2.1-1.03-4.53-2.76-6.32.55-.41.98-.96 1.25-1.61.182-.43.28-.897.289-1.391.032-1.838-1.335-3.51-3.146-3.821A3.816 3.816 0 0 0 8.18 8.53c0 .52.1 1.01.3 1.46.25.64.69 1.19 1.23 1.6-1.74 1.8-2.51 4.24-2.78 6.34 0 .02-.01.05-.01.07s-.01.04-.01.06v.02c-.01.06-.02.11-.02.17-.01.03-.01.07-.01.1a15 15 0 0 0-.131 3.353.7.7 0 0 0 .52.623c3.617.95 5.832.943 9.432 0a.7.7 0 0 0 .52-.623c.072-.894.06-2.068-.131-3.353"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M21.74 9.4c0 .73-.13 1.98-.49 3.34-.06.01-.13.03-.19.06-.33.16-1.21.11-1.82-.04a.748.748 0 1 0-.36 1.45c.12.03.79.19 1.52.19.1 0 .19 0 .29-.01-.7 1.69-1.82 3.27-3.6 3.96 0-.03 0-.07-.01-.1 0-.06-.01-.11-.02-.17v-.03c0-.03-.01-.06-.02-.09 0-.01-.01-.03-.01-.04-.27-2.1-1.03-4.53-2.76-6.32.55-.41.98-.96 1.25-1.61.91.21 2.76.32 5.05-1.21.23-.16.53-.17.77-.04s.4.38.4.66M9.71 11.59c-1.74 1.8-2.51 4.24-2.78 6.34 0 .02-.01.05-.01.07s-.01.04-.01.06v.02c-.01.06-.02.11-.02.17-.01.03-.01.07-.01.1-1.71-.69-2.82-2.2-3.51-3.83.73 0 1.4-.16 1.52-.18.4-.1.65-.51.55-.91s-.51-.65-.91-.55c-.55.13-1.31.19-1.71.09-.42-1.44-.56-2.8-.56-3.57 0-.28.16-.53.4-.66s.54-.12.77.04c2.29 1.53 4.14 1.42 5.05 1.21.25.64.69 1.19 1.23 1.6"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasAngelBulk;
