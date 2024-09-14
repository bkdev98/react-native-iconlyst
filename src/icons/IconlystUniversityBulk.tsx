import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUniversityBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M21.71 21.428c-.19.24-.47.37-.78.37H4.01a.99.99 0 0 1-.78-.37c-.2-.24-.27-.55-.2-.85l.38-1.76c.11-.46.52-.8.99-.8h16.14c.47 0 .88.34.99.8l.38 1.76c.07.3 0 .61-.2.85M21.9 9.317v.58c0 .68-.55 1.23-1.23 1.23H4.27c-.68 0-1.23-.55-1.23-1.23v-.58c0-.42.21-.8.57-1.03l8.19-5.29c.41-.26.93-.26 1.34.01l8.2 5.28c.35.22.56.61.56 1.03" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.49 18.017h1.5v-6.89h-1.5zm-4.51 0h1.5v-6.89h-1.5zm-4.52 0h1.5v-6.89h-1.5zm-4.51 0h1.5v-6.89h-1.5zM12.505 8.321a.75.75 0 0 1-.75-.75c0-.414.336-.755.75-.755s.75.331.75.745v.01a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUniversityBulk;
