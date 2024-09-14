import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallPlayVoiceBulk = ({
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
      d="M19.95 14.745c-.244-.233-.51-.485-.79-.767-1.287-1.282-2.353-.863-3.295-.494-1.073.42-2.086.82-3.935-1.025-1.848-1.85-1.452-2.866-1.032-3.942.368-.943.785-2.01-.502-3.298a40 40 0 0 1-.773-.799c-.945-.993-1.63-1.71-2.59-1.723-.857-.004-1.704.518-3.006 1.821-.013.013-.077.077-.088.09-.288.281-1.054 1.026-1.064 2.488-.016 2.285 1.826 5.293 5.474 8.94 3.632 3.631 6.629 5.472 8.91 5.471h.02c1.462-.007 2.21-.77 2.493-1.059l.096-.092c1.299-1.3 1.825-2.17 1.814-3.006-.011-.964-.733-1.653-1.732-2.605"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.725 9.642a.75.75 0 0 0 .75-.75v-5.65a.75.75 0 0 0-1.5 0v5.65c0 .414.336.75.75.75M21.376 4.392a.75.75 0 0 0-.75.75v1.96a.75.75 0 0 0 1.5 0v-1.96a.75.75 0 0 0-.75-.75M16.076 7.852a.75.75 0 0 0 .75-.75v-1.96a.75.75 0 0 0-1.5 0v1.96c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneCallPlayVoiceBulk;
