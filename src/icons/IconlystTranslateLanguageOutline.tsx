import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTranslateLanguageOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.24 4.663c.985-1.056 2.388-1.647 4.043-1.647h8.435c1.66 0 3.062.59 4.045 1.647.979 1.051 1.487 2.502 1.487 4.129v7.947c0 1.628-.508 3.078-1.487 4.129-.984 1.057-2.386 1.648-4.046 1.648H8.283c-1.66 0-3.062-.591-4.046-1.648-.978-1.05-1.487-2.501-1.487-4.129V8.792c0-1.628.511-3.079 1.49-4.13m1.098 1.023c-.678.726-1.088 1.79-1.088 3.106v7.947c0 1.318.409 2.38 1.085 3.107.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.948-1.17.676-.726 1.085-1.789 1.085-3.107V8.792c0-1.318-.409-2.38-1.084-3.107-.67-.72-1.66-1.17-2.948-1.17H8.283c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.668 9.64a.75.75 0 0 1 .75-.75h8.165a.75.75 0 0 1 0 1.5H8.418a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 7.816a.75.75 0 0 1 .75.75V9.64a.75.75 0 0 1-1.5 0V8.566a.75.75 0 0 1 .75-.75M14.686 8.965a.75.75 0 0 1 1.066.55q.01.057.012.09.005.07.005.126 0 .114-.014.26a7 7 0 0 1-.118.759 9 9 0 0 1-.822 2.275c-.904 1.739-2.627 3.683-5.807 4.656a.75.75 0 1 1-.44-1.435c2.746-.84 4.171-2.481 4.916-3.913.376-.723.58-1.398.685-1.895.053-.248.08-.447.092-.58q.007-.078.007-.114a.75.75 0 0 1 .418-.78"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.404 12.107a.75.75 0 0 1 1.017.3c.695 1.273 2.132 3.153 4.744 3.737a.75.75 0 1 1-.327 1.464c-3.212-.718-4.94-3.026-5.734-4.483a.75.75 0 0 1 .3-1.018"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTranslateLanguageOutline;
