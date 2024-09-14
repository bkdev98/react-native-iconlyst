import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChart3BarFavoriteOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.034 7.306a.75.75 0 0 1 .75.75v9.128a.75.75 0 0 1-1.5 0V8.056a.75.75 0 0 1 .75-.75m-4.2 2.954a.75.75 0 0 1 .75.75v6.174a.75.75 0 0 1-1.5 0V11.01a.75.75 0 0 1 .75-.75m8.331 3.263a.75.75 0 0 1 .75.75v2.91a.75.75 0 0 1-1.5 0v-2.91a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.74 4.516c.985-1.057 2.388-1.648 4.043-1.648h4.435a.75.75 0 1 1 0 1.5H7.783c-1.284 0-2.273.45-2.945 1.17-.678.727-1.088 1.79-1.088 3.108v7.946c0 1.318.409 2.38 1.085 3.107.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.948-1.17.676-.726 1.085-1.789 1.085-3.107v-3.946a.75.75 0 0 1 1.5 0v3.946c0 1.628-.508 3.078-1.487 4.129-.984 1.057-2.387 1.647-4.046 1.647H7.783c-1.66 0-3.062-.59-4.046-1.647-.978-1.05-1.487-2.501-1.487-4.13V8.647c0-1.63.511-3.08 1.49-4.13"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M17.03 9.368c-.36 0-.71-.19-.89-.53-.11-.21-.15-.44-.11-.65l.26-1.46-1.07-1.03c-.2-.2-.31-.46-.31-.73s.11-.52.3-.72c.17-.16.35-.25.55-.28l1.5-.22.66-1.33c.11-.24.33-.43.59-.51.25-.09.54-.06.78.06.19.09.34.24.44.44v.02l.66 1.33 1.48.21c.26.04.5.18.66.39.32.41.27.99-.11 1.35l-1.06 1.02.25 1.45c.08.57-.29 1.08-.83 1.17-.23.03-.44 0-.63-.1l-1.32-.69-1.33.69c-.15.08-.31.11-.47.11zm1.58-.93h.01zm.46-.01h-.01zm-2.09-3.12.54.52c.25.24.35.58.29.91l-.13.73.68-.36a1 1 0 0 1 .95 0l.66.35-.13-.73c-.06-.33.05-.67.3-.91l.53-.51-.75-.11a1 1 0 0 1-.76-.55l-.34-.68-.34.68c-.15.3-.43.5-.76.55l-.75.11zm4.34 1.14v.02z"
    />
  </Svg>
);
export default IconlystChart3BarFavoriteOutline;
