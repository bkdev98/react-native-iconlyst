import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerRack6Outline = ({
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
      d="M6.971 14.362a2.944 2.944 0 0 0 0 5.888H17.53a2.944 2.944 0 0 0 0-5.888zm-4.444 2.944a4.444 4.444 0 0 1 4.444-4.444H17.53a4.444 4.444 0 0 1 0 8.888H6.97a4.444 4.444 0 0 1-4.444-4.444M6.971 3.75a2.943 2.943 0 1 0 0 5.887H17.53a2.944 2.944 0 0 0 0-5.887zM2.527 6.693A4.443 4.443 0 0 1 6.971 2.25H17.53a4.443 4.443 0 1 1 0 8.887H6.97a4.444 4.444 0 0 1-4.444-4.444"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.89 17.306a.75.75 0 0 1 .75-.75h.523a.75.75 0 0 1 0 1.5h-.522a.75.75 0 0 1-.75-.75M6.89 6.693a.75.75 0 0 1 .75-.75h.523a.75.75 0 1 1 0 1.5h-.522a.75.75 0 0 1-.75-.75M12.604 17.306a.75.75 0 0 1 .75-.75h3.56a.75.75 0 0 1 0 1.5h-3.56a.75.75 0 0 1-.75-.75M12.604 6.693a.75.75 0 0 1 .75-.75h3.56a.75.75 0 0 1 0 1.5h-3.56a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerRack6Outline;
