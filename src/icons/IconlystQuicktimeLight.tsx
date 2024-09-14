import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuicktimeLight = ({
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
      d="m19.064 16.727 1.159 1.159a.94.94 0 0 1 .277.668v1.001a.944.944 0 0 1-.945.945h-1.001c-.25 0-.49-.1-.668-.277l-1.159-1.16a8.5 8.5 0 1 1 2.337-2.336"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.648 14.311-3.242-3.242a1.652 1.652 0 0 0-2.337 2.337l3.242 3.242a5.207 5.207 0 1 1 2.337-2.337"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystQuicktimeLight;
