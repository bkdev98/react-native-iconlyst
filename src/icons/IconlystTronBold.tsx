import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTronBold = ({
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
      fillRule="evenodd"
      d="m12.7 12.048-.236 2.58 2.448-3.111zM9.419 8.147l2.474 2.198 1.296-1.707zM15.314 9.877l-.67-.677-.777 1.024zM11.22 11.754l-2.161-1.92 1.922 4.539z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.39 10.49c-.025.21-.088.418-.229.594l-4.75 6.039c-.2.259-.489.41-.803.443-.033.005-.063.019-.097.019l-.069-.003q-.01-.003-.02-.006-.04-.002-.077-.005a1.18 1.18 0 0 1-.936-.701L6.68 8.057a1.17 1.17 0 0 1 .162-1.188c.27-.338.7-.5 1.125-.423l6.337.825c.4.05.78.238 1.064.526l1.7 1.722c.167.155.26.363.306.582.005.017.018.03.022.048.004.017 0 .032.002.049a1 1 0 0 1-.007.292m-1.173-7.985H7.782c-3.16 0-5.282 2.223-5.282 5.53v7.94c0 3.307 2.122 5.53 5.282 5.53h8.434c3.16 0 5.284-2.223 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTronBold;
