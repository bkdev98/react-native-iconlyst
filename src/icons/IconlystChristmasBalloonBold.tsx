import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasBalloonBold = ({
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
      d="M5.294 17.443a.75.75 0 0 0-.673.819.74.74 0 0 0 .819.673.88.88 0 0 1 .622.191.84.84 0 0 1 .307.576.75.75 0 1 0 1.492-.145 2.33 2.33 0 0 0-.845-1.59 2.32 2.32 0 0 0-1.722-.524M20.962 17.576a.75.75 0 0 0-.93-1.178 2.31 2.31 0 0 0-.381 3.239.754.754 0 0 0 1.054.124.75.75 0 0 0 .124-1.054.806.806 0 0 1 .133-1.131M19.26 4.082a.753.753 0 0 0 .888-.338.748.748 0 0 0-.759-1.125.77.77 0 0 0-.645.684.76.76 0 0 0 .515.779M3.4 13.045a.766.766 0 0 0-.646.694.763.763 0 0 0 .754.807.75.75 0 0 0 .675-.423.751.751 0 0 0-.784-1.078M16.07 10.401a.5.5 0 0 1-.45.283h-.697l.733 1.273a.5.5 0 0 1-.433.75h-1.517v1.319a.75.75 0 0 1-1.5 0v-1.319h-1.652a.5.5 0 0 1-.432-.75l.733-1.273h-.697a.498.498 0 0 1-.39-.811l2.73-3.425a.516.516 0 0 1 .781 0l2.73 3.425c.121.15.144.355.06.528m3.921-.429c0-3.916-3.187-7.102-7.103-7.102S5.784 6.056 5.784 9.972c0 3.317 2.377 6.974 5.74 7.777l-.794.819a.751.751 0 0 0 .54 1.271h.47c-.264.69-.184 1.484.268 2.372a.751.751 0 0 0 1.336-.682c-.178-.351-.359-.844-.203-1.194.136-.302.482-.449.613-.496h.758a.75.75 0 0 0 .54-1.271l-.795-.82c3.36-.805 5.734-4.461 5.734-7.776"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasBalloonBold;
