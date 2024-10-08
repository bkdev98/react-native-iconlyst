import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSSLOutline = ({
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
      d="M5.087 5.204c-.678.727-1.088 1.79-1.088 3.106v7.947c0 1.318.409 2.38 1.085 3.106.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.948-1.17.676-.726 1.085-1.788 1.085-3.106V8.31c0-1.318-.409-2.38-1.084-3.107-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17M3.99 4.18c.984-1.056 2.387-1.648 4.042-1.648h8.435c1.66 0 3.062.591 4.046 1.648.978 1.051 1.486 2.502 1.486 4.13v7.946c0 1.627-.508 3.078-1.487 4.129-.984 1.056-2.386 1.647-4.046 1.647H8.032c-1.66 0-3.062-.59-4.046-1.647-.978-1.051-1.487-2.501-1.487-4.129V8.31c0-1.628.512-3.079 1.49-4.13"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.927 12.068a.75.75 0 0 1 .75.75v3.505h.983a.75.75 0 0 1 0 1.5h-1.733a.75.75 0 0 1-.75-.75v-4.255a.75.75 0 0 1 .75-.75M10.464 13.885c0-1 .81-1.809 1.81-1.809h.719a.75.75 0 0 1 0 1.5h-.72a.309.309 0 1 0 0 .618h.15a1.81 1.81 0 0 1 0 3.62h-.75a.75.75 0 0 1 0-1.5h.75a.31.31 0 0 0 0-.62h-.15c-.999 0-1.81-.81-1.81-1.809M6.02 13.885c0-1 .81-1.809 1.81-1.809h.719a.75.75 0 0 1 0 1.5h-.72a.309.309 0 1 0 0 .618h.15a1.81 1.81 0 1 1 0 3.62H7.23a.75.75 0 0 1 0-1.5h.749a.31.31 0 1 0 0-.62h-.15c-.999 0-1.808-.81-1.808-1.809M2.501 9.771a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75M5.79 6.83a.75.75 0 0 1 .75-.75h.063a.75.75 0 1 1 0 1.5H6.54a.75.75 0 0 1-.75-.75m2.486 0a.75.75 0 0 1 .75-.75h.063a.75.75 0 1 1 0 1.5h-.063a.75.75 0 0 1-.75-.75m2.486 0a.75.75 0 0 1 .75-.75h.063a.75.75 0 0 1 0 1.5h-.063a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSSLOutline;
