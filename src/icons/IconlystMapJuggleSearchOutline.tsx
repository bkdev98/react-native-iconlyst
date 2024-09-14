import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapJuggleSearchOutline = ({
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
      d="M5.207 10.416a.74.74 0 0 1-.53-.22l-.442-.44-.442.44a.75.75 0 1 1-1.06-1.06l.44-.442-.44-.442a.75.75 0 0 1 1.06-1.06l.442.441.442-.44a.75.75 0 0 1 1.06 1.06l-.441.441.44.442a.75.75 0 0 1-.53 1.28m13.856-3.91a.75.75 0 0 1-.53-.22l-.441-.442-.442.441a.75.75 0 0 1-1.061-1.06l.442-.442-.442-.442a.75.75 0 0 1 1.06-1.06l.443.441.44-.44a.75.75 0 0 1 1.062 1.06l-.442.441.442.441a.752.752 0 0 1-.531 1.281M8.133 20.931a2.53 2.53 0 1 1 2.05-1.042 2.51 2.51 0 0 1-2.05 1.042m.006-3.558a1.027 1.027 0 0 0-.606 1.861 1 1 0 0 0 .766.185 1.029 1.029 0 0 0-.16-2.046M14.506 14.855a.75.75 0 0 1-.582-.275l-.912-1.118a3.7 3.7 0 1 1-1.23-7.008 3.7 3.7 0 0 1 2.42 6.1l.883 1.082a.75.75 0 0 1-.58 1.224zm-3.1-6.92a2.2 2.2 0 1 0 1.307 3.96l.033-.024.047-.037a2.2 2.2 0 0 0-1.387-3.9"
    />
    <Path
      fill={props.color}
      d="M12.35 20.675a8 8 0 0 1-3.016-.593.75.75 0 0 1 .57-1.39 6.399 6.399 0 0 0 8.777-6.81.75.75 0 1 1 1.486-.21 7.95 7.95 0 0 1-6.56 8.9q-.625.102-1.257.103"
    />
    <Path
      fill={props.color}
      d="M21.263 14.326a.75.75 0 0 1-.567-.258l-1.22-1.4-1.39 1.21a.75.75 0 1 1-.985-1.13l1.957-1.7a.75.75 0 0 1 1.06.073l1.71 1.97a.75.75 0 0 1-.565 1.235"
    />
  </Svg>
);
export default IconlystMapJuggleSearchOutline;
