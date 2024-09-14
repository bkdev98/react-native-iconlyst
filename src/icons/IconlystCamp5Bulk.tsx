import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCamp5Bulk = ({
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
      d="M20.78 20.87c-.32.55-.9.88-1.54.88H4.76c-.64 0-1.22-.33-1.54-.88-.17-.29-.26-.61-.26-.93 0-.29.07-.58.22-.85l4.22-7.84.73-1.35 2.29-4.25c.08-.16.19-.29.32-.42l-.96-.95a.754.754 0 0 1 0-1.06c.3-.29.77-.29 1.06 0l.41.4V3a.749.749 0 1 1 1.5 0v.63l.41-.41c.29-.29.76-.29 1.06 0 .29.29.29.77 0 1.06l-.96.96c.13.12.24.25.32.41l2.29 4.25.73 1.35 4.22 7.84c.31.57.29 1.23-.04 1.78"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16 21.75h-1.7L12 17.49l-2.3 4.26H8l3.34-6.2c.13-.24.39-.39.66-.39.28 0 .53.15.66.39zM16.6 11.25l-1.79 1.6c-.14.13-.32.2-.5.2s-.36-.07-.5-.19L12 11.22l-1.82 1.64c-.29.25-.72.25-1.01-.01l-1.77-1.6.73-1.35c.03.02.05.04.08.06l1.47 1.33 1.81-1.63c.29-.26.72-.26 1.01 0l1.81 1.63 1.48-1.33c.03-.02.05-.04.08-.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCamp5Bulk;
