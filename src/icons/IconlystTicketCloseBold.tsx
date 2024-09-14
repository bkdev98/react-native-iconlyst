import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketCloseBold = ({
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
      d="M17.249 20.125c-1.39 0-2.55-.97-2.85-2.27-.04-.21-.07-.43-.07-.65a2.92 2.92 0 0 1 3.55-2.84 2.916 2.916 0 0 1-.63 5.76m-4.51-10.17a.754.754 0 0 1 0-1.06c.3-.29.77-.29 1.07 0l1.76 1.76c.29.3.29.77 0 1.06-.15.15-.34.22-.53.22s-.39-.07-.53-.22zm6.78 3.48.22-.22c.66-.66.99-.99 1.21-1.39.53-.96.53-2.1 0-3.06-.21-.39-.54-.72-1.23-1.42-.15-.14-.23-.22-.31-.27-.27-.18-.4-.22-.74-.18-.06 0-.26.06-.7.19-.38.12-.79.02-1.07-.26-.29-.29-.39-.69-.27-1.08.13-.42.19-.63.2-.7.03-.32 0-.47-.18-.73-.04-.06-.12-.15-.31-.34-.66-.66-.99-.99-1.38-1.21-.96-.52-2.11-.52-3.07 0-.39.22-.72.55-1.39 1.22l-.81.82 2.09 2.09c.3.29.3.77 0 1.06-.14.15-.34.22-.53.22s-.38-.07-.53-.22l-2.09-2.09-4.67 4.66c-.65.64-1 1-1.22 1.4-.53.96-.53 2.1 0 3.06.22.4.55.73 1.22 1.4.17.17.26.25.33.29.26.18.4.22.72.18.06 0 .26-.06.7-.19.39-.12.79-.02 1.1.29.26.27.35.66.22 1.11-.13.44-.16.56-.17.66-.03.33 0 .45.18.71.04.06.12.15.3.33.66.67.99 1 1.39 1.22a3.22 3.22 0 0 0 3.07 0c.39-.22.73-.55 1.39-1.22l.28-.28a4.39 4.39 0 0 0 3.78 2.14 4.42 4.42 0 0 0 4.41-4.42c0-1.6-.86-3.01-2.14-3.77"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.782 15.673a.75.75 0 0 0-1.06 0l-.476.475-.474-.475a.75.75 0 1 0-1.06 1.06l.474.476-.475.475a.749.749 0 1 0 1.061 1.06l.474-.474.475.474a.75.75 0 0 0 1.061 0 .75.75 0 0 0 0-1.06l-.475-.475.475-.475a.75.75 0 0 0 0-1.061"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.249 20.125c-1.39 0-2.55-.97-2.85-2.27-.04-.21-.07-.43-.07-.65a2.92 2.92 0 0 1 3.55-2.84 2.916 2.916 0 0 1-.63 5.76m-4.51-10.17a.754.754 0 0 1 0-1.06c.3-.29.77-.29 1.07 0l1.76 1.76c.29.3.29.77 0 1.06-.15.15-.34.22-.53.22s-.39-.07-.53-.22zm6.78 3.48.22-.22c.66-.66.99-.99 1.21-1.39.53-.96.53-2.1 0-3.06-.21-.39-.54-.72-1.23-1.42-.15-.14-.23-.22-.31-.27-.27-.18-.4-.22-.74-.18-.06 0-.26.06-.7.19-.38.12-.79.02-1.07-.26-.29-.29-.39-.69-.27-1.08.13-.42.19-.63.2-.7.03-.32 0-.47-.18-.73-.04-.06-.12-.15-.31-.34-.66-.66-.99-.99-1.38-1.21-.96-.52-2.11-.52-3.07 0-.39.22-.72.55-1.39 1.22l-.81.82 2.09 2.09c.3.29.3.77 0 1.06-.14.15-.34.22-.53.22s-.38-.07-.53-.22l-2.09-2.09-4.67 4.66c-.65.64-1 1-1.22 1.4-.53.96-.53 2.1 0 3.06.22.4.55.73 1.22 1.4.17.17.26.25.33.29.26.18.4.22.72.18.06 0 .26-.06.7-.19.39-.12.79-.02 1.1.29.26.27.35.66.22 1.11-.13.44-.16.56-.17.66-.03.33 0 .45.18.71.04.06.12.15.3.33.66.67.99 1 1.39 1.22a3.22 3.22 0 0 0 3.07 0c.39-.22.73-.55 1.39-1.22l.28-.28a4.39 4.39 0 0 0 3.78 2.14 4.42 4.42 0 0 0 4.41-4.42c0-1.6-.86-3.01-2.14-3.77"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.782 15.673a.75.75 0 0 0-1.06 0l-.476.475-.474-.475a.75.75 0 1 0-1.06 1.06l.474.476-.475.475a.749.749 0 1 0 1.061 1.06l.474-.474.475.474a.75.75 0 0 0 1.061 0 .75.75 0 0 0 0-1.06l-.475-.475.475-.475a.75.75 0 0 0 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTicketCloseBold;