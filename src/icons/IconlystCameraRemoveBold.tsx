import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraRemoveBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.43 13.068c-.01-.06-.02-.11-.02-.17a2.59 2.59 0 0 1 2.59-2.59h.04zm10.07-9.57a.755.755 0 0 0-1.06.03l-1.77 1.88c-.08-.14-.18-.31-.3-.53-.47-.89-1.4-1.45-2.4-1.45h-3.92c-.98 0-1.9.54-2.39 1.42-.27.49-.55.93-.66 1.07-.25.26-.59.41-.93.43-1.97 0-3.57 1.59-3.57 3.55v5.65c0 1.28.53 2.47 1.44 3.33l-1.11 1.16a.755.755 0 0 0 .55 1.27c.2 0 .4-.08.54-.24l15.61-16.51c.29-.3.27-.77-.03-1.06M20.25 7.212a.5.5 0 0 0-.689.047l-4.838 5.302a.5.5 0 0 0-.131.337 2.596 2.596 0 0 1-2.593 2.593.5.5 0 0 0-.362.156l-3.473 3.66a.498.498 0 0 0 .362.844h8.368a4.61 4.61 0 0 0 4.606-4.606V9.902a3.5 3.5 0 0 0-1.25-2.69"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCameraRemoveBold;
