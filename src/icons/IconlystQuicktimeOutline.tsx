import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuicktimeOutline = ({
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
      d="M11.987 21.264c-2.68 0-5.32-1.17-7.14-3.39a9.22 9.22 0 0 1 .61-12.41 9.2 9.2 0 0 1 12.41-.61 9.2 9.2 0 0 1 2.15 11.76l.74.74c.32.33.5.75.5 1.2v1c0 .94-.76 1.7-1.7 1.7h-1c-.46 0-.88-.18-1.2-.51l-.73-.73a9.2 9.2 0 0 1-4.62 1.24zm0-17.02c-1.99 0-3.96.77-5.47 2.28a7.717 7.717 0 0 0-.51 10.39 7.727 7.727 0 0 0 10.3 1.52c.3-.2.69-.16.95.09l1.16 1.16s.09.06.14.06h1a.2.2 0 0 0 .2-.2v-1c0-.05-.02-.1-.06-.14l-1.16-1.16a.755.755 0 0 1-.09-.95 7.704 7.704 0 0 0-1.52-10.29 7.72 7.72 0 0 0-4.92-1.78z"
    />
    <Path
      fill={props.color}
      d="M11.967 17.956c-1.86 0-3.66-.88-4.82-2.48a5.96 5.96 0 0 1 .62-7.7 5.94 5.94 0 0 1 7.69-.62 5.93 5.93 0 0 1 1.85 7.49.748.748 0 0 1-1.2.2l-3.24-3.24a.9.9 0 0 0-.64-.27.87.87 0 0 0-.64.27.9.9 0 0 0-.27.64c0 .24.09.46.26.63l3.24 3.24a.744.744 0 0 1-.2 1.2c-.86.43-1.77.63-2.67.63zm.01-10.42c-1.14 0-2.28.44-3.15 1.31a4.454 4.454 0 0 0-.47 5.76 4.41 4.41 0 0 0 4.58 1.74l-2.41-2.41c-.45-.45-.7-1.05-.7-1.7s.25-1.25.71-1.7a2.39 2.39 0 0 1 3.4 0l2.4 2.4c.38-1.71-.27-3.51-1.75-4.57-.79-.57-1.7-.85-2.61-.85z"
    />
  </Svg>
);
export default IconlystQuicktimeOutline;
