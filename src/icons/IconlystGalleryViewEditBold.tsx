import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGalleryViewEditBold = ({
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
      d="M3.756 7.907q-.006.127-.006.257V9.33h3.348a.3.3 0 0 1 .3.3v4.465a.3.3 0 0 1-.3.3H3.75v1.118q0 .156.008.306h3.337a.3.3 0 0 1 .3.303l-.038 3.283h1.466v-3.284a.3.3 0 0 1 .3-.3h2.323c.248 0 .394.29.27.504a4.7 4.7 0 0 0-.603 1.816c-.08.809.32 1.322.32 2.015a.75.75 0 0 1-.75.75H7.428c-1.547 0-2.86-.55-3.784-1.537-.918-.982-1.393-2.337-1.393-3.856v-7.35c0-1.518.475-2.875 1.392-3.859.923-.99 2.237-1.542 3.785-1.542h7.79c1.553 0 2.867.552 3.788 1.543.916.984 1.389 2.341 1.389 3.858v1.953a.75.75 0 0 1-.75.75c-1.315 0-1.829-1.353-3.491.445l-.319.349a.3.3 0 0 1-.521-.203V9.632a.3.3 0 0 1 .3-.3h3.28V8.164q0-.13-.005-.257h-3.275a.3.3 0 0 1-.3-.302l.022-3.34q-.058-.002-.118-.002h-1.33v3.345a.3.3 0 0 1-.3.3H9.122a.3.3 0 0 1-.3-.3V4.263H7.357l.038 3.34a.3.3 0 0 1-.3.304z"
    />
    <Path
      fill={props.color}
      d="M13.883 14.092a.3.3 0 0 1-.3.3h-4.46a.3.3 0 0 1-.3-.3v-4.46a.3.3 0 0 1 .3-.3h4.46a.3.3 0 0 1 .3.3z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.23 12.38.815.756c.795.739.842 1.986.107 2.78l-3.822 4.17a2.88 2.88 0 0 1-1.66.915h-.003l-.888.148a1.73 1.73 0 0 1-1.484-.452 1.72 1.72 0 0 1-.536-1.455l.098-.915a2.87 2.87 0 0 1 .715-1.61l3.873-4.225a1.977 1.977 0 0 1 2.784-.111m-4.01 6.7 3.828-4.18a.47.47 0 0 0-.023-.663l-.815-.754a.472.472 0 0 0-.662.025l-3.863 4.217a1.36 1.36 0 0 0-.336.763l-.099.915a.24.24 0 0 0 .074.203c.034.03.104.075.207.064l.89-.148c.305-.052.59-.21.798-.442"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGalleryViewEditBold;
