import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongSlideBold = ({
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
      d="M20.25 14.867c0 .881-.713 1.599-1.59 1.599h-.034V7.533h.034c.877 0 1.59.717 1.59 1.599zm-4.646-4.775a.756.756 0 0 1-.885.586 2.8 2.8 0 0 1-.768-.275v3.329l.001.01a2.493 2.493 0 0 1-2.49 2.489 2.49 2.49 0 0 1-2.489-2.489 2.49 2.49 0 0 1 2.489-2.49c.351 0 .685.075.989.207V8.52c0-.361.257-.672.613-.737a.75.75 0 0 1 .837.468c.011.026.333.797 1.117.957a.75.75 0 0 1 .586.884M5.391 16.466H5.34c-.877 0-1.59-.718-1.59-1.599V9.132c0-.882.713-1.599 1.59-1.599h.051zM18.66 6.033h-.201c-.447-1.496-1.819-2.596-3.458-2.596H9.016c-1.64 0-3.012 1.1-3.459 2.596H5.34a3.1 3.1 0 0 0-3.09 3.099v5.735a3.1 3.1 0 0 0 3.09 3.099h.217c.446 1.496 1.819 2.597 3.459 2.597h5.985c1.64 0 3.013-1.101 3.459-2.597h.2a3.1 3.1 0 0 0 3.09-3.099V9.132a3.1 3.1 0 0 0-3.09-3.099"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.45 13.737a.99.99 0 0 0-.988-.985.99.99 0 1 0 .99.992l-.001-.004z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongSlideBold;
