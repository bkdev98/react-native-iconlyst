import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCamp6Bulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M21.75 20.489c0 .42-.34.75-.75.75H3a.749.749 0 1 1 0-1.5h.43l4.07-7.55.79-1.45.88-1.65 1.98-3.66-.84-1.56c-.2-.36-.06-.82.31-1.02.36-.19.82-.06 1.01.31l.37.69.37-.69c.2-.37.65-.5 1.02-.31.36.2.5.66.3 1.02l-.84 1.56 1.19 2.2.78 1.46.89 1.65.79 1.47 4.06 7.53H21c.41 0 .75.34.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.91 21.24h-1.7L12 17.14l-2.22 4.1h-1.7l3.26-6.04c.13-.24.38-.39.66-.39.27 0 .53.15.66.39zM16.5 12.209c-.06.02-.12.03-.19.03H7.75c-.09 0-.17-.02-.25-.05l.79-1.45h7.42zM14.82 9.089c-.07.03-.14.04-.22.04H9.39c-.08 0-.15-.01-.22-.04l.79-1.46h4.08z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCamp6Bulk;
