import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasBalloonBulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M19.994 9.978c0 3.3-2.37 6.97-5.73 7.77-.44.11-.9.17-1.37.17s-.93-.06-1.37-.17c-3.37-.8-5.74-4.47-5.74-7.77 0-3.92 3.19-7.11 7.11-7.11 3.91 0 7.1 3.19 7.1 7.11"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.264 17.748c-.44.11-.9.17-1.37.17s-.93-.06-1.37-.17l-.79.82a.74.74 0 0 0-.15.81c.11.28.39.46.69.46h.468c-.265.69-.185 1.485.268 2.372a.75.75 0 0 0 1.008.328.75.75 0 0 0 .328-1.009c-.18-.351-.36-.843-.204-1.194.137-.306.492-.452.617-.497h.755a.751.751 0 0 0 .54-1.27zM5.295 17.444a.75.75 0 0 0-.673.819.74.74 0 0 0 .819.673.89.89 0 0 1 .623.19.85.85 0 0 1 .306.576.749.749 0 1 0 1.492-.145 2.33 2.33 0 0 0-.845-1.59 2.32 2.32 0 0 0-1.722-.523M20.964 17.575a.751.751 0 0 0-.932-1.176 2.31 2.31 0 0 0-.38 3.238.754.754 0 0 0 1.054.124.75.75 0 0 0 .124-1.054.807.807 0 0 1 .134-1.132M19.498 4.12a.75.75 0 0 0 .65-.376.751.751 0 0 0-.758-1.125.77.77 0 0 0-.645.684.76.76 0 0 0 .753.817M3.4 13.044a.766.766 0 0 0-.645.694.763.763 0 0 0 .754.807.75.75 0 0 0 .675-.423.749.749 0 0 0-.784-1.078M13.28 6.449a.516.516 0 0 0-.78 0L9.767 9.874a.499.499 0 0 0 .391.811h.697l-.733 1.271a.5.5 0 0 0 .432.75h1.652v1.32a.75.75 0 0 0 1.5 0v-1.32h1.517a.5.5 0 0 0 .433-.75l-.733-1.271h.696a.499.499 0 0 0 .39-.811z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasBalloonBulk;
