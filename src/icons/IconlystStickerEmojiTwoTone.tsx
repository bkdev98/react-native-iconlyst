import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerEmojiTwoTone = ({
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
      d="M16.351 20.256a2.42 2.42 0 0 1-1.745.744H8.282C5.344 21 3.5 18.92 3.5 15.974V8.025C3.5 5.081 5.335 3 8.282 3h8.435c2.95 0 4.783 2.08 4.783 5.026v5.893c0 .625-.241 1.226-.674 1.676z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.176 20.928v-3.414a3.02 3.02 0 0 1 3.014-3.022h3.233M9.168 14.102c.722.94 1.787 1.527 2.968 1.527.418 0 .821-.073 1.2-.21M9.197 8.59v.065m.26-.05a.26.26 0 1 1-.523 0 .26.26 0 0 1 .522 0M15.843 8.59v.065m.26-.05a.26.26 0 1 1-.522 0 .26.26 0 0 1 .522 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStickerEmojiTwoTone;
