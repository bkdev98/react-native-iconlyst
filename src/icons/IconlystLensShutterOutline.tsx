import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLensShutterOutline = ({
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
      d="M13.954 7.753a.75.75 0 0 1 1.025.274l6.109 10.58a.75.75 0 1 1-1.3.75L13.68 8.777a.75.75 0 0 1 .274-1.024"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.42 8.402a.75.75 0 0 1 .75-.75h11.08a.75.75 0 0 1 0 1.5H10.17a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.665 2.35a.75.75 0 0 1 .274 1.025l-5.198 9a.75.75 0 0 1-1.299-.75l5.198-9a.75.75 0 0 1 1.024-.274"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.689 4.374a.75.75 0 0 1 1.024.275l6.108 10.578a.75.75 0 1 1-1.299.75L3.414 5.399a.75.75 0 0 1 .275-1.025"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 15.598a.75.75 0 0 1 .75-.75h11.08a.75.75 0 1 1 0 1.5H3.25a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.784 11.35a.75.75 0 0 1 .274 1.025l-5.196 9a.75.75 0 0 1-1.3-.75l5.197-9a.75.75 0 0 1 1.025-.274"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.99 3.897C4.975 2.841 6.377 2.25 8.032 2.25h8.435c1.659 0 3.062.59 4.046 1.648C21.49 4.948 22 6.398 22 8.026v7.947c0 1.628-.509 3.078-1.488 4.13-.984 1.056-2.387 1.647-4.046 1.647H8.032c-1.66 0-3.062-.591-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.129V8.026c0-1.628.511-3.078 1.49-4.129M5.087 4.92C4.41 5.647 4 6.71 4 8.026v7.947c0 1.318.409 2.38 1.084 3.107.67.72 1.66 1.17 2.948 1.17h8.434c1.289 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.107V8.026c0-1.317-.41-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLensShutterOutline;
