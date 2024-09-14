import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConnectionBold = ({
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
      d="M12 16.18a.316.316 0 0 0-.312.31c0 .174.136.31.31.31a.307.307 0 0 0 .313-.31.316.316 0 0 0-.311-.31"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.544 10c0 .844-.534 1.596-1.33 1.869l-2.464.855v2.123c.624.286 1.06.913 1.06 1.643a1.812 1.812 0 0 1-3.623 0c0-.73.438-1.357 1.063-1.643v-.436l-2.328-.561a2.005 2.005 0 0 1-1.53-1.94v-.9a.75.75 0 0 1 1.5 0v.9c0 .228.158.429.375.48l1.983.478v-4.66a.74.74 0 0 1-.383.122.749.749 0 0 1-.53-1.281l1.133-1.13c.013-.013.03-.017.043-.029a.8.8 0 0 1 .201-.132.7.7 0 0 1 .219-.044c.023-.003.043-.014.067-.014.017 0 .032.009.05.01.08.006.16.017.236.048.073.03.136.078.195.129.015.013.034.018.048.032l1.133 1.13a.75.75 0 0 1 .001 1.06.74.74 0 0 1-.913.099v2.927l1.975-.684a.48.48 0 0 0 .319-.451v-.93a.75.75 0 0 1 1.5 0zm-.328-7.5H7.782C4.622 2.5 2.5 4.723 2.5 8.03v7.94c0 3.307 2.122 5.53 5.282 5.53h8.433c3.161 0 5.285-2.223 5.285-5.53V8.03c0-3.307-2.123-5.53-5.284-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystConnectionBold;
