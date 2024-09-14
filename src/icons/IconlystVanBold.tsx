import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVanBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.54 10.986a.2.2 0 0 1-.2-.2v-4.73c0-.111.09-.2.2-.2h2.85c.18 0 .36.04.52.12.16.09.3.21.4.36l2.99 4.29q.039.06.072.125c.059.114-.035.235-.163.235zm4.29 6.03c-.01.12-.02.23-.04.32-.07.229-.22.43-.42.579-.41.3-1.04.3-1.45 0-.2-.15-.35-.35-.42-.58-.03-.1-.04-.2-.04-.36v-.01a1.04 1.04 0 0 1 .31-.82q.165-.18.39-.27c.15-.06.32-.1.48-.1.17 0 .33.04.49.1q.225.09.39.27c.11.11.19.24.25.39.05.14.07.29.06.44zm-5.99-6.23a.2.2 0 0 1-.2.2H3.2a.2.2 0 0 1-.2-.2v-3.53c0-.37.15-.73.41-.99.27-.27.62-.41 1-.41h8.23c.11 0 .2.089.2.2zm-4.74 6.18c0 .12-.02.23-.04.3-.07.26-.23.47-.44.629s-.46.25-.71.25-.51-.08-.71-.24c-.2-.15-.35-.37-.43-.63-.03-.1-.04-.21-.04-.31 0-.32.12-.62.34-.84.23-.22.53-.35.84-.35.32 0 .62.12.84.35.22.22.35.52.35.83zm14.44-7.19-3-4.29c-.24-.35-.56-.63-.94-.83-.37-.2-.79-.3-1.21-.3H4.41c-.78 0-1.51.3-2.06.85s-.85 1.28-.85 2.05v7.61c0 .77.31 1.52.85 2.049.54.54 1.25.84 2.01.86.17.52.49 1 .93 1.33.47.35 1.04.54 1.63.54h.01a2.73 2.73 0 0 0 1.6-.55c.45-.34.78-.81.96-1.38h5.56c0 .01.01.03.01.04.16.55.51 1.03.98 1.37a2.7 2.7 0 0 0 1.6.52c.58 0 1.15-.18 1.61-.52.46-.33.8-.8.97-1.36.33-.01.64-.09.94-.21.36-.15.67-.36.95-.64.27-.27.48-.59.62-.94.15-.35.22-.73.22-1.1l.05-3.58c0-.54-.15-1.07-.46-1.52"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVanBold;
