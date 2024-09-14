import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerCopyTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.65 7.777c.35-.364.833-.57 1.338-.57h4.846c2.252 0 3.665 1.595 3.665 3.852v6.09c0 2.258-1.406 3.853-3.665 3.853H11.37c-2.26 0-3.666-1.595-3.666-3.853v-4.516c0-.479.186-.938.517-1.283z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.882 7.262v2.797a2.475 2.475 0 0 1-2.47 2.476H7.765"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.707 16.803h-.54c-2.261 0-3.666-1.598-3.666-3.86V8.43c0-.472.193-.934.52-1.28l3.426-3.571A1.88 1.88 0 0 1 8.785 3h4.85c2.253 0 3.668 1.598 3.668 3.86v.347"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.682 3.059v2.797a2.475 2.475 0 0 1-2.47 2.476H3.564"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStickerCopyTwoTone;
