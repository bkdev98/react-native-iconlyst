import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarStarBold = ({
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
      d="m11.055 17.228-.097.552.517-.268c.33-.172.726-.17 1.057.003l.51.264-.095-.55c-.064-.372.06-.75.333-1.011l.395-.38-.558-.08a1.14 1.14 0 0 1-.857-.615l-.26-.52-.258.518a1.14 1.14 0 0 1-.861.617l-.555.08.397.38c.27.256.395.636.332 1.01M19.37 5.325c-.73-.72-1.76-1.13-2.98-1.24v-.96a.749.749 0 1 0-1.5 0v3.55c-.07.02-.13.04-.2.04-.42 0-.75-.34-.75-.75v-1.72a.2.2 0 0 0-.2-.2H9.11v-.92a.749.749 0 1 0-1.5 0v3.55c-.06.02-.13.04-.2.04-.41 0-.75-.34-.75-.75V4.501a.193.193 0 0 0-.247-.189C4.505 4.885 3.4 6.432 3.4 8.725v.6c0 .11.09.2.2.2h16.8a.2.2 0 0 0 .2-.2v-.6c0-1.41-.42-2.59-1.23-3.4"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.713 14.797a1.13 1.13 0 0 1 .665-.34l1.107-.157.496-.99a1.15 1.15 0 0 1 1.545-.497c.21.108.38.278.49.49l.005.008.495.989 1.11.159c.61.082 1.049.652.969 1.27a1.16 1.16 0 0 1-.332.665l-.805.77.19 1.08c.049.31-.023.612-.201.859a1.136 1.136 0 0 1-1.463.336l-.983-.51-.996.516a1.12 1.12 0 0 1-.862.08 1.136 1.136 0 0 1-.79-1.272l.19-1.087-.798-.765a1.14 1.14 0 0 1-.032-1.604M3.4 16.865c0 2.98 1.79 4.76 4.79 4.76h7.62c3 0 4.79-1.75 4.79-4.69v-5.71a.2.2 0 0 0-.2-.2H3.6a.2.2 0 0 0-.2.2z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarStarBold;
