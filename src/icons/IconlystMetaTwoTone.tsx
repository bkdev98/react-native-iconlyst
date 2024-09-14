import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMetaTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.199 17.593c1.148-.359 2.028-1.395 2.698-2.345 1.203-1.705 2.03-3.647 3.103-5.434a17 17 0 0 0-.76-1.164l-.327-.425c-.807-1.057-1.962-2.038-3.374-1.913-2.333.207-3.622 2.636-4.144 4.693-.394 1.551-.608 3.335-.082 4.884.42 1.236 1.547 2.123 2.886 1.704"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.801 17.593c-1.148-.359-2.028-1.395-2.699-2.345C13.9 13.543 13.074 11.601 12 9.814a17 17 0 0 1 .76-1.164l.326-.425c.808-1.057 1.962-2.038 3.376-1.913 2.332.207 3.621 2.636 4.143 4.693.394 1.551.609 3.335.082 4.884-.421 1.236-1.547 2.123-2.886 1.704"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMetaTwoTone;
