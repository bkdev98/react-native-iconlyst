import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatOutlinecurved = ({
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
      d="M15.19 12.413a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2h-.009a1 1 0 0 1-1-1M11.18 12.413a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M7.171 12.413a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.79 5.457c-3.608-3.61-9.471-3.61-13.08 0-2.825 2.826-3.44 7.014-1.853 10.441l.015.035c.092.23.09.489.086.636a7 7 0 0 1-.05.612c-.025.204-.055.43-.085.658l-.007.048c-.033.247-.067.502-.097.757-.06.516-.097.999-.08 1.385q.014.287.056.433.014.048.023.07a1 1 0 0 0 .07.023q.145.042.433.056c.386.017.869-.02 1.385-.08q.385-.046.757-.097l.048-.006c.228-.031.453-.061.658-.085.216-.025.428-.046.612-.05.147-.005.406-.007.635.085l.035.015c3.428 1.586 7.615.973 10.44-1.853 3.608-3.61 3.616-9.467 0-13.083m1.061-1.06C15.657.2 8.844.2 4.65 4.397 1.386 7.66.664 12.485 2.459 16.447v.08a6 6 0 0 1-.042.48q-.033.287-.082.637l-.006.043c-.033.247-.068.514-.1.784-.061.532-.111 1.113-.089 1.623.011.256.041.52.108.765.066.24.183.516.405.738.223.223.5.339.738.405.245.067.51.097.765.108.51.022 1.09-.028 1.623-.09.27-.03.536-.066.784-.1l.043-.005q.35-.048.636-.082.306-.036.481-.041h.079c3.963 1.793 8.786 1.073 12.05-2.192 4.193-4.194 4.202-11.001 0-15.203"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatOutlinecurved;
