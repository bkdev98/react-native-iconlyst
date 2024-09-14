import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGmailOutline = ({
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
      d="M5.749 5.737a1.18 1.18 0 0 0-1.672.047 1.183 1.183 0 0 0 .044 1.678l.006.005 7.877 7.646 7.875-7.652c.477-.453.496-1.2.044-1.677a1.18 1.18 0 0 0-1.673-.045l-5.723 5.563a.75.75 0 0 1-1.045 0L5.75 5.739zm-2.76-.985a2.68 2.68 0 0 1 3.8-.096l.003.003 5.212 5.06 5.21-5.066a2.68 2.68 0 0 1 3.797.1 2.683 2.683 0 0 1-.095 3.793l-8.39 8.15a.75.75 0 0 1-1.044 0l-8.397-8.15a2.683 2.683 0 0 1-.096-3.794"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.873 5.05a.75.75 0 0 1 .75.75V19.3a.75.75 0 0 1-.73.75l-.238.005-.559.014c-.423.01-.917.02-1.159.02A2.687 2.687 0 0 1 2.25 17.4V6.62a.75.75 0 1 1 1.5 0V17.4c0 .656.531 1.188 1.187 1.188.221 0 .696-.01 1.125-.02l.061-.001V5.8a.75.75 0 0 1 .75-.75M17.127 5.047a.75.75 0 0 1 .75.75v12.768l.062.002c.428.01.903.019 1.124.019.657 0 1.187-.532 1.187-1.186V6.618a.75.75 0 0 1 1.5 0V17.4a2.686 2.686 0 0 1-2.687 2.686c-.242 0-.735-.01-1.159-.02l-.558-.013-.239-.006a.75.75 0 0 1-.73-.75v-13.5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGmailOutline;
