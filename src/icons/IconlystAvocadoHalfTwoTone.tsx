import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAvocadoHalfTwoTone = ({
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
      d="M11.39 5.936c1.886-1.284 3.735-2.318 5.457-2.766 2.175-.567 3.014.292 2.415 2.486-.543 1.993-1.806 4.113-3.362 6.27-.798 1.106-1.688 2.178-2.976 3.486-3.007 3.031-6.986 4.597-8.761 3.272-1.551-1.157-.957-4.214 1.277-7.267"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.27 3.524c.751.803 1.343 2.13 1.419 3.558.141 2.68-.716 5.204-1.988 7.645-.652 1.252-1.457 2.41-2.735 3.727-2.995 3.043-8.115 3.468-11.356.677-.307-.264-.466-.355-.72-.658"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.978 5.867a4.547 4.547 0 0 0-3.074 7.898c1.48 1.36 7.84-4.636 6.66-6.147a4.54 4.54 0 0 0-3.586-1.75"
    />
  </Svg>
);
export default IconlystAvocadoHalfTwoTone;
