import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystJumpRopeBold = ({
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
      d="M17.4 2.249a2.554 2.554 0 0 0-2.551 2.55v3.6c0 1.143.762 2.102 1.8 2.424v4.775c0 .513-.207 1.015-.57 1.378-.734.734-2.028.731-2.76.001a1.97 1.97 0 0 1-.57-1.379v-7.2c0-.908-.368-1.797-1.01-2.44a3.44 3.44 0 0 0-2.44-1.01 3.48 3.48 0 0 0-2.44 1.01 3.43 3.43 0 0 0-1.01 2.44v4.778a2.545 2.545 0 0 0-1.8 2.424v3.6a2.553 2.553 0 0 0 2.55 2.55 2.554 2.554 0 0 0 2.552-2.55v-3.6a2.545 2.545 0 0 0-1.802-2.425V8.398c0-.514.208-1.017.57-1.378.73-.732 2.025-.733 2.759-.001.364.363.572.866.572 1.379v7.2c0 .922.358 1.788 1.009 2.439a3.43 3.43 0 0 0 2.44 1.011 3.43 3.43 0 0 0 2.44-1.011 3.47 3.47 0 0 0 1.01-2.439v-4.775a2.545 2.545 0 0 0 1.8-2.424v-3.6a2.553 2.553 0 0 0-2.55-2.55"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystJumpRopeBold;
