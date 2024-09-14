import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCPULockBulk = ({
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
      d="M19.47 9.188v6.27c-.02 2.6-1.71 4.34-4.2 4.34H8.73c-2.5 0-4.19-1.74-4.21-4.34v-6.27c.03-2.6 1.71-4.34 4.21-4.34h6.54c2.49 0 4.17 1.74 4.2 4.34"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.86 21.318c0 .42.34.75.75.75.42 0 .75-.33.75-.75v-1.52h-1.5zM13.64 21.318c0 .42.33.75.75.75.41 0 .75-.33.75-.75v-1.52h-1.5zM2.25 9.938c0 .42.33.75.75.75h1.52v-1.5H3c-.42 0-.75.34-.75.75M2.25 14.708c0 .42.33.75.75.75h1.52v-1.5H3c-.42 0-.75.34-.75.75M21 13.958h-1.53v1.5H21c.42 0 .75-.33.75-.75 0-.41-.33-.75-.75-.75M21.75 9.938c0-.41-.33-.75-.75-.75h-1.53v1.5H21c.42 0 .75-.33.75-.75M15.14 3.328a.749.749 0 1 0-1.5 0v1.52h1.5zM10.36 3.328a.749.749 0 1 0-1.5 0v1.52h1.5zM14.007 14.42c0 .341-.28.62-.624.62h-2.77a.62.62 0 0 1-.622-.62v-1.56c0-.343.28-.622.623-.622h2.769c.344 0 .624.28.624.621zm-2.91-3.919a.9.9 0 0 1 .89-.892H12a.9.9 0 0 1 .903.88v.25h-1.805zm3.305.51v-.53A2.405 2.405 0 0 0 12 8.108h-.03a2.394 2.394 0 0 0-2.373 2.38v.52a2.12 2.12 0 0 0-1.106 1.85v1.56c0 1.17.953 2.12 2.123 2.12h2.769a2.125 2.125 0 0 0 2.124-2.12v-1.56c0-.799-.45-1.488-1.105-1.849"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCPULockBulk;
