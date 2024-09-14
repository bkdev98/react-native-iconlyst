import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPage1Outline = ({
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
      d="M3.99 3.898C4.976 2.842 6.379 2.25 8.034 2.25h8.434c1.66 0 3.062.591 4.046 1.648.978 1.05 1.486 2.501 1.486 4.129v7.946c0 1.628-.508 3.078-1.487 4.129-.983 1.057-2.386 1.648-4.046 1.648H8.033c-1.66 0-3.062-.591-4.046-1.648-.978-1.05-1.487-2.501-1.487-4.129V8.027c0-1.629.511-3.079 1.49-4.13M20.5 8.742v-.715c0-1.318-.41-2.38-1.085-3.107-.67-.72-1.66-1.17-2.948-1.17H8.033c-1.284 0-2.273.45-2.945 1.17C4.41 5.648 4 6.71 4 8.028v.715zM4 10.242h16.5v5.731c0 1.318-.41 2.38-1.085 3.107-.67.72-1.66 1.17-2.949 1.17H8.033c-1.289 0-2.278-.45-2.948-1.17C4.409 18.354 4 17.29 4 15.973zM5.79 6.55a.75.75 0 0 1 .75-.75h.055a.75.75 0 1 1 0 1.5h-.056a.75.75 0 0 1-.75-.75m2.485 0a.75.75 0 0 1 .75-.75h.055a.75.75 0 1 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m2.486 0a.75.75 0 0 1 .75-.75h.056a.75.75 0 0 1 0 1.5h-.056a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPage1Outline;
