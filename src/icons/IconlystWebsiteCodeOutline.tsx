import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebsiteCodeOutline = ({
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
      d="M3.99 3.897C4.975 2.84 6.377 2.25 8.032 2.25h8.435c1.659 0 3.061.59 4.045 1.647C21.491 4.947 22 6.398 22 8.027v7.946c0 1.628-.51 3.078-1.488 4.129-.984 1.057-2.387 1.648-4.047 1.648H8.032c-1.66 0-3.062-.591-4.045-1.648C3.008 19.052 2.5 17.6 2.5 15.973V8.026c0-1.628.511-3.079 1.49-4.13M5.087 4.92C4.41 5.646 4 6.709 4 8.026v7.947c0 1.318.409 2.38 1.084 3.107.67.72 1.66 1.17 2.948 1.17h8.433c1.29 0 2.279-.45 2.95-1.17.676-.726 1.085-1.79 1.085-3.107V8.026c0-1.318-.41-2.38-1.085-3.107-.67-.72-1.66-1.169-2.948-1.169H8.031c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.79 6.55a.75.75 0 0 1 .75-.75h.01a.75.75 0 1 1 0 1.5h-.01a.75.75 0 0 1-.75-.75m2.485 0a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75m2.486 0a.75.75 0 0 1 .75-.75h.01a.75.75 0 1 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M2.5 9.492a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75M10.961 12.587a.75.75 0 0 1 0 1.06l-1.465 1.466 1.465 1.464a.75.75 0 0 1-1.06 1.06l-1.996-1.994a.75.75 0 0 1 0-1.06l1.996-1.996a.75.75 0 0 1 1.06 0M13.538 12.587a.75.75 0 0 1 1.06 0l1.996 1.995a.75.75 0 0 1 0 1.061L14.6 17.638a.75.75 0 0 1-1.06-1.061l1.464-1.464-1.465-1.465a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebsiteCodeOutline;
