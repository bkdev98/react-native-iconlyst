import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMedalBulk = ({
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
      d="m19.7 3.477-3.21 6.4c-.4-.3-.84-.56-1.3-.76l3.17-6.32c.18-.37.64-.52 1.01-.33.37.18.52.64.33 1.01M10.17 9.047a6 6 0 0 0-1.32.71l-3.531-6.25a.74.74 0 0 1 .28-1.02.75.75 0 0 1 1.02.28zM16.04 3.467l-2.46 4.89.19.33c-.38-.07-.78-.11-1.18-.11-.2 0-.4.01-.59.03l-2.83-5.1a.75.75 0 0 1 1.31-.73l2.22 3.99 2-3.98c.18-.37.63-.52 1-.33s.52.64.34 1.01"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.489 9.878c-.4-.3-.84-.56-1.3-.76-.45-.2-.92-.34-1.42-.43-.38-.07-.78-.11-1.18-.11-.2 0-.4.01-.59.03-.64.06-1.26.21-1.83.44a6 6 0 0 0-1.32.71 6.55 6.55 0 0 0-2.78 5.35c0 3.59 2.93 6.52 6.52 6.52 3.6 0 6.53-2.93 6.53-6.52a6.5 6.5 0 0 0-2.63-5.23"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.447 14.84-.923.886.218 1.249a.76.76 0 0 1-1.103.793l-1.132-.586-1.15.589a.73.73 0 0 1-.573.054.75.75 0 0 1-.447-.372.75.75 0 0 1-.078-.475l.218-1.252-.92-.884a.75.75 0 0 1-.02-1.062.74.74 0 0 1 .442-.224l1.267-.182.578-1.142a.759.759 0 0 1 1.355 0l.57 1.138 1.278.187a.74.74 0 0 1 .493.286.747.747 0 0 1-.073.998"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMedalBulk;
