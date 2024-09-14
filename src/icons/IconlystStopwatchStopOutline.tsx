import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStopwatchStopOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 6.426a6.913 6.913 0 0 0 0 13.824.75.75 0 0 1 0 1.5 8.413 8.413 0 1 1 8.412-8.412.75.75 0 0 1-1.5 0 6.913 6.913 0 0 0-6.912-6.912"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.396 3a.75.75 0 0 1 .75-.75h4.208a.75.75 0 1 1 0 1.5h-4.207a.75.75 0 0 1-.75-.75M15.712 9.839a.75.75 0 0 1 0 1.06l-2.941 2.942a.75.75 0 0 1-1.061-1.06l2.941-2.942a.75.75 0 0 1 1.06 0M15.38 16.543c.348-.372.83-.562 1.353-.562h1.94c.525 0 1.007.19 1.354.563.342.366.497.85.497 1.343v1.828c0 .494-.155.977-.497 1.344-.347.372-.829.563-1.353.563h-1.94c-.525 0-1.007-.19-1.354-.563-.342-.367-.497-.85-.497-1.344v-1.828c0-.494.156-.977.498-1.344m1.098 1.023c-.04.043-.095.138-.095.322v1.827c0 .184.056.28.095.322.033.036.101.085.255.085h1.94c.155 0 .223-.05.256-.085.04-.043.095-.138.095-.322v-1.828c0-.184-.056-.28-.095-.321-.033-.036-.101-.085-.255-.085h-1.94c-.153 0-.222.048-.256.085"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStopwatchStopOutline;
