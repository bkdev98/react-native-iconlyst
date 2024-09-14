import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerCopyBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.334 21.002c2.26 0 3.665-1.595 3.665-3.853v-6.09c0-2.257-1.413-3.852-3.665-3.852h-4.846c-.505 0-.987.206-1.338.57L7.72 11.35c-.33.345-.516.804-.516 1.283v4.516c0 2.258 1.406 3.853 3.666 3.853h3.232"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.382 10.059a2.475 2.475 0 0 1-2.47 2.476H7.265"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.207 16.803h-.54c-2.261 0-3.666-1.598-3.666-3.86V8.43c0-.472.193-.934.52-1.28l3.426-3.571A1.88 1.88 0 0 1 8.285 3h4.85c2.253 0 3.668 1.598 3.668 3.86v.347"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.182 5.855a2.475 2.475 0 0 1-2.47 2.477H3.064"
    />
  </Svg>
);
export default IconlystStickerCopyBroken;
