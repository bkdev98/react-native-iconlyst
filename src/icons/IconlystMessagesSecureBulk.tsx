import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesSecureBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M10.015 10.798c0 .107.005.255.01.47.007.371.017.908.017 1.698 0 1.595 1.652 2.397 2.258 2.64.606-.246 2.263-1.058 2.263-2.64 0-.783.011-1.317.017-1.689.004-.224.01-.377.01-.486-.436-.217-1.966-.749-2.316-.786-.28.035-1.763.551-2.259.793" />
      <Path d="M16.08 11.307c-.007.365-.017.89-.017 1.66 0 3.043-3.398 4.11-3.543 4.153a.73.73 0 0 1-.435 0c-.145-.043-3.542-1.11-3.542-4.153 0-.777-.011-1.304-.018-1.67-.017-.883-.023-1.15.368-1.543.424-.424 2.9-1.247 3.41-1.247.527 0 2.976.81 3.41 1.248.39.395.385.663.368 1.552m2.94-5.218a9.42 9.42 0 0 0-6.716-2.79c-2.54 0-4.927.99-6.72 2.79-2.806 2.815-3.57 7.136-1.913 10.729.19.477.316.81.316 1.092 0 .334-.141.749-.278 1.15-.265.78-.565 1.662.078 2.308.647.649 1.529.344 2.31.075.397-.137.807-.278 1.132-.28.293 0 .659.147 1.08.318a9.45 9.45 0 0 0 3.97.87 9.51 9.51 0 0 0 6.74-2.786c3.705-3.716 3.704-9.761 0-13.476" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.063 12.967c0-.77.01-1.295.018-1.66.017-.89.022-1.157-.368-1.552-.434-.438-2.883-1.248-3.41-1.248-.51 0-2.986.823-3.41 1.247-.39.392-.385.659-.368 1.537v.066c.008.363.018.875.018 1.61 0 3.043 3.397 4.11 3.542 4.153a.73.73 0 0 0 .435 0c.145-.043 3.543-1.11 3.543-4.153M10.02 11.09l-.006-.293c.496-.242 1.98-.758 2.26-.793.35.037 1.88.57 2.314.786q0 .098-.004.257l-.005.23-.002.152c-.006.362-.015.855-.015 1.536 0 1.582-1.657 2.394-2.263 2.64-.606-.243-2.258-1.045-2.258-2.64 0-.79-.01-1.327-.017-1.699z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesSecureBulk;