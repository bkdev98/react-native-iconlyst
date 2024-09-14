import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPersonBulk = ({
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
      d="M6.998 2.646a3.237 3.237 0 1 0 0 6.475 3.237 3.237 0 0 0 0-6.475M8.265 11.884a2.05 2.05 0 0 0-2.548-.002c-.25.198-.434.502-.606.847-.175.352-.373.824-.624 1.423L3.04 17.597c-.166.397-.301.718-.392.98-.091.267-.155.52-.149.777.02.788.49 1.494 1.21 1.818.233.105.491.144.772.163.278.018.626.018 1.056.018h2.89c.43 0 .776 0 1.053-.018.28-.019.539-.058.772-.163a2.05 2.05 0 0 0 1.21-1.815c.007-.256-.056-.509-.147-.775-.09-.262-.224-.583-.39-.98L9.49 14.159c-.25-.6-.447-1.072-.621-1.425-.17-.345-.354-.65-.604-.849"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="M17.035 2.646a3.237 3.237 0 1 0 0 6.475 3.237 3.237 0 0 0 0-6.475M18.464 11.44h-2.889c-.43 0-.778 0-1.056.018-.28.018-.54.058-.773.163a2.05 2.05 0 0 0-1.209 1.818c-.006.256.057.51.15.776.09.263.224.583.391.98l1.446 3.446c.25.598.449 1.07.624 1.423.172.345.355.65.606.847.747.59 1.802.589 2.548-.003.25-.198.433-.503.604-.848.174-.353.371-.826.621-1.425l1.436-3.445c.166-.397.3-.717.39-.98.09-.266.153-.519.146-.775a2.05 2.05 0 0 0-1.21-1.815c-.233-.104-.49-.144-.771-.162-.277-.018-.624-.018-1.054-.018" />
    </G>
  </Svg>
);
export default IconlystPersonBulk;