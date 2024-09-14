import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebAiAltLight = ({
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
      d="M21 12.538v-4.51C21 5.08 19.166 3 16.218 3H7.782C4.842 3 3 5.081 3 8.027v7.947C3 18.92 4.834 21 7.782 21h2.583M6.345 6.55h-.056m2.541 0h-.055m2.54 0h-.055M21 9.491H3M18.404 15.8l.101.274a3.76 3.76 0 0 0 2.222 2.225L21 18.4l-.273.102a3.76 3.76 0 0 0-2.222 2.225l-.1.273-.102-.273a3.76 3.76 0 0 0-2.222-2.226l-.272-.1.272-.102a3.76 3.76 0 0 0 2.222-2.225z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.793 13.957c.215.709.77 1.263 1.477 1.48a2.22 2.22 0 0 0-1.477 1.479 2.22 2.22 0 0 0-1.477-1.48 2.22 2.22 0 0 0 1.477-1.48"
    />
  </Svg>
);
export default IconlystWebAiAltLight;
