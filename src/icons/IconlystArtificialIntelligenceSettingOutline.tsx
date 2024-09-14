import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArtificialIntelligenceSettingOutline = ({
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
      d="M9.54 2.306a.75.75 0 0 0-.694.066L4.675 5.101a.75.75 0 0 0-.34.628v2.545l-1.678.863a.75.75 0 0 0-.407.667v4.393a.75.75 0 0 0 .407.667l1.678.862v2.542a.75.75 0 0 0 .34.627l4.17 2.732a.75.75 0 0 0 .696.067l2.744-1.125a.75.75 0 0 0-.57-1.388l-2.378.975-3.502-2.293v-2.595a.75.75 0 0 0-.407-.667l-1.678-.862V10.26L5.428 9.4a.75.75 0 0 0 .407-.667V6.134l3.502-2.29 2.38.97a.75.75 0 1 0 .566-1.388z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.46 2.306a.75.75 0 0 1 .695.067l4.17 2.732a.75.75 0 0 1 .34.627v2.542l1.678.862a.75.75 0 0 1 .407.667v4.393a.75.75 0 0 1-.407.667l-1.678.863v2.545a.75.75 0 0 1-.34.628l-4.17 2.729a.75.75 0 0 1-.695.066l-2.744-1.12a.75.75 0 0 1-.466-.694v-1.755a.75.75 0 0 1 1.5 0v1.25l1.913.782 3.502-2.291v-2.598a.75.75 0 0 1 .407-.667l1.678-.863v-3.477L18.572 9.4a.75.75 0 0 1-.407-.667V6.137l-3.502-2.293-1.913.784v1.248a.75.75 0 0 1-1.5 0V4.125a.75.75 0 0 1 .466-.694z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.005 16.055c-.41 0-.75-.34-.75-.75v-.45c-.5-.13-.96-.39-1.34-.77h-.01l-.39.21c-.36.21-.82.08-1.02-.27a.74.74 0 0 1 .27-1.02l.39-.23c-.07-.25-.1-.51-.1-.78s.03-.53.1-.78l-.39-.22a.752.752 0 1 1 .76-1.3l.39.22h.01c.38-.39.85-.65 1.34-.78v-.45c0-.41.34-.75.75-.75s.75.34.75.75v.45c.49.13.95.38 1.33.77h.01l.39-.21c.36-.21.82-.09 1.02.27s.09.82-.27 1.02l-.39.23c.07.25.1.51.1.78s-.04.53-.1.77l.39.23c.36.21.48.67.27 1.03a.75.75 0 0 1-1.03.27l-.39-.22h-.01c-.37.39-.83.65-1.33.78v.45c0 .41-.34.75-.75.75m0-5.5a1.44 1.44 0 0 0-1.44 1.45c0 .39.15.75.42 1.02a1.446 1.446 0 0 0 2.04 0c.28-.27.43-.64.43-1.03s-.15-.75-.42-1.03c-.28-.28-.65-.42-1.02-.42z"
    />
  </Svg>
);
export default IconlystArtificialIntelligenceSettingOutline;
