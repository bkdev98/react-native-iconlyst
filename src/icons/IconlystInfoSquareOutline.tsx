import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInfoSquareOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.334 2C19.724 2 22 4.378 22 7.916v8.168C22 19.622 19.723 22 16.332 22H7.664C4.276 22 2 19.622 2 16.084V7.916C2 4.378 4.276 2 7.664 2zm0 1.5h-8.67C5.135 3.5 3.5 5.233 3.5 7.916v8.168c0 2.683 1.635 4.416 4.164 4.416h8.668c2.532 0 4.168-1.733 4.168-4.416V7.916c0-2.683-1.636-4.416-4.166-4.416m-4.34 7.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75M12 7.204a1 1 0 1 1 0 2 1.003 1.003 0 0 1-1.005-1c0-.553.443-1 .995-1z"
    />
  </Svg>
);
export default IconlystInfoSquareOutline;