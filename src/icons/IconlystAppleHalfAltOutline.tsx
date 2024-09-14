import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAppleHalfAltOutline = ({
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
      d="M15.02 21.747c-.83 0-1.6-.24-2.21-.43-.32-.1-.65-.2-.81-.2-.17 0-.51.1-.83.2-.81.24-1.92.58-3.19.32-1.22-.15-5.24-3.3-5.19-9.5v-.04c.15-2.44.94-4.18 2.35-5.19 1.9-1.37 4.2-.84 4.64-.72 1.47.4 2.96.4 4.44 0 .44-.12 2.74-.64 4.64.72 1.41 1.01 2.19 2.76 2.35 5.19.05 6.28-3.97 9.41-5.25 9.55-.32.08-.63.11-.93.11zM12 19.607c.39 0 .79.13 1.26.27.73.23 1.56.49 2.43.28.76-.16 4.06-2.8 4.01-8.02-.12-1.92-.7-3.29-1.72-4.03-1.38-.99-3.18-.55-3.38-.49-1.73.47-3.49.47-5.22 0-.2-.05-1.99-.5-3.38.49-1.02.73-1.6 2.09-1.72 4.05-.03 5.22 3.26 7.85 3.94 7.99.94.19 1.77-.06 2.51-.28.47-.14.87-.26 1.26-.26z"
    />
    <Path
      fill={props.color}
      d="M9.03 15.377c-.41 0-.75-.34-.75-.75v-1.97c0-.41.34-.75.75-.75s.75.34.75.75v1.97c0 .41-.34.75-.75.75M12 7.947c-.41 0-.75-.34-.75-.75 0-1.36-.44-3.06-2.56-3.47a.75.75 0 1 1 .29-1.47c2.4.46 3.77 2.27 3.77 4.94 0 .41-.34.75-.75.75"
    />
    <Path
      fill={props.color}
      d="M12 21.107c-.41 0-.75-.34-.75-.75V7.347c0-.41.34-.75.75-.75s.75.34.75.75v13.01c0 .41-.34.75-.75.75"
    />
  </Svg>
);
export default IconlystAppleHalfAltOutline;
