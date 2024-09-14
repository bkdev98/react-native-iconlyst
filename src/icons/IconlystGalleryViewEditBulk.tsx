import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGalleryViewEditBulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M4.256 7.908q-.006.127-.006.256v1.167h3.348a.3.3 0 0 1 .3.3v4.465a.3.3 0 0 1-.3.3H4.25v1.12q0 .154.008.304h3.337a.3.3 0 0 1 .3.304l-.038 3.283h1.466v-3.285a.3.3 0 0 1 .3-.3h2.323c.248 0 .394.29.27.505a4.7 4.7 0 0 0-.603 1.815c-.08.81.32 1.323.32 2.015a.75.75 0 0 1-.75.75H7.928c-1.547 0-2.86-.549-3.784-1.536-.918-.983-1.393-2.337-1.393-3.856v-7.35c0-1.518.475-2.875 1.392-3.86.923-.99 2.237-1.541 3.785-1.541h7.79c1.553 0 2.867.551 3.788 1.542.916.985 1.389 2.342 1.389 3.858v1.953a.75.75 0 0 1-.75.75c-1.315 0-1.829-1.353-3.491.445l-.319.35a.3.3 0 0 1-.521-.203V9.633a.3.3 0 0 1 .3-.3h3.28V8.164q0-.13-.005-.256h-3.275a.3.3 0 0 1-.3-.302l.022-3.341-.118-.001h-1.33v3.344a.3.3 0 0 1-.3.3H9.622a.3.3 0 0 1-.3-.3V4.264H7.857l.038 3.34a.3.3 0 0 1-.3.304z" />
      <Path d="M14.383 14.093a.3.3 0 0 1-.3.3h-4.46a.3.3 0 0 1-.3-.3v-4.46a.3.3 0 0 1 .3-.3h4.46a.3.3 0 0 1 .3.3z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.73 12.381.815.755c.795.74.842 1.986.107 2.781l-3.822 4.17a2.88 2.88 0 0 1-1.66.914l-.003.001-.888.147a1.73 1.73 0 0 1-1.484-.452 1.72 1.72 0 0 1-.536-1.455l.098-.915a2.87 2.87 0 0 1 .715-1.609l3.873-4.226a1.977 1.977 0 0 1 2.784-.11m-4.01 6.7 3.828-4.18a.47.47 0 0 0-.023-.664l-.815-.754a.472.472 0 0 0-.662.025l-3.863 4.217a1.36 1.36 0 0 0-.336.763l-.099.915a.24.24 0 0 0 .074.203c.034.03.104.075.207.064l.89-.148c.305-.052.59-.209.798-.442"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGalleryViewEditBulk;