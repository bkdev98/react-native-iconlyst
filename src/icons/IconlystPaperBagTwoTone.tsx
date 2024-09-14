import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperBagTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.879 3.82H20.12c.762 0 1.38.642 1.38 1.434v1.827c0 .792-.618 1.434-1.38 1.434H4.88c-.762 0-1.379-.642-1.379-1.434V5.254c0-.792.617-1.434 1.379-1.434"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.861 12.91h5.278"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.777 8.516v7.352c0 2.528 1.574 4.314 4.104 4.314h7.237c2.53 0 4.105-1.786 4.105-4.314V8.516"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPaperBagTwoTone;
