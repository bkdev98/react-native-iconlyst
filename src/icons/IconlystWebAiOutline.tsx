import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebAiOutline = ({
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
      d="M3.74 3.898C4.726 2.842 6.129 2.25 7.784 2.25h8.434c1.66 0 3.062.591 4.046 1.648.978 1.05 1.486 2.501 1.486 4.129v7.946c0 1.628-.508 3.078-1.487 4.129-.983 1.057-2.386 1.648-4.046 1.648H7.783c-1.66 0-3.062-.591-4.046-1.648-.978-1.05-1.487-2.501-1.487-4.129V8.027c0-1.629.511-3.079 1.49-4.13M4.839 4.92C4.16 5.647 3.75 6.71 3.75 8.027v7.946c0 1.318.409 2.38 1.085 3.107.67.72 1.66 1.17 2.948 1.17h8.433c1.29 0 2.278-.45 2.948-1.17.676-.726 1.085-1.789 1.085-3.107V8.027c0-1.318-.409-2.38-1.084-3.107-.67-.72-1.66-1.17-2.948-1.17H7.783c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.54 6.55a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5h-.056a.75.75 0 0 1-.75-.75m2.485 0a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m2.486 0a.75.75 0 0 1 .75-.75h.056a.75.75 0 0 1 0 1.5h-.056a.75.75 0 0 1-.75-.75M2.25 9.492a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M14.334 18.193a.75.75 0 0 0 .704-.49l.093-.254a2.74 2.74 0 0 1 1.617-1.619l.253-.094a.75.75 0 0 0 0-1.406l-.253-.094a2.74 2.74 0 0 1-1.617-1.62l-.093-.252a.75.75 0 0 0-1.407 0l-.094.253a2.74 2.74 0 0 1-1.617 1.62l-.253.093a.75.75 0 0 0 0 1.406l.253.094c.75.278 1.34.869 1.617 1.62l.094.253a.75.75 0 0 0 .703.49m-.788-3.16q.446-.342.788-.789.342.447.789.79a4.2 4.2 0 0 0-.789.788 4.2 4.2 0 0 0-.788-.789M8.803 18.591a.75.75 0 0 0 .717-.532 1.02 1.02 0 0 1 .678-.679.75.75 0 0 0 0-1.435 1.02 1.02 0 0 1-.678-.679.75.75 0 0 0-1.435 0 1.02 1.02 0 0 1-.677.68.75.75 0 0 0 0 1.434c.324.099.578.353.677.68a.75.75 0 0 0 .718.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebAiOutline;
