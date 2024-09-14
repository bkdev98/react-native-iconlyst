import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScaleBulk = ({
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
      d="M11.78 6.249c-.31 0-.56-.2-.64-.48 0-.02 0-.04-.01-.07 0-.02-.01-.05-.02-.07v-.04c0-.37.29-.67.67-.67.32 0 .58.22.65.52v.05a.653.653 0 0 1-.65.76m9.23-2.2a.753.753 0 0 0-.86-.62l-6.5 1.08a2.15 2.15 0 0 0-1.87-1.09c-1.06 0-1.94.77-2.13 1.76l-6.48 1.08c-.41.07-.69.46-.62.87.06.36.38.62.74.62.04 0 .08 0 .12-.01l6.49-1.08c.25.44.65.78 1.13.95a2.08 2.08 0 0 0 1.5 0c.7-.25 1.23-.86 1.38-1.62l6.48-1.08c.37-.06.63-.38.63-.73 0-.05 0-.09-.01-.13M18.919 19.732H4.641a.75.75 0 0 0 0 1.5h14.278a.75.75 0 0 0 0-1.5M9.16 18.989h5.34c.33 0 .62-.21.72-.52a.76.76 0 0 0-.27-.84l-.74-.54-1.68-1.04-.34-.21a.75.75 0 0 0-.8.01l-.36.23-1.63 1.05-.69.5a.76.76 0 0 0-.27.84c.1.31.39.52.72.52"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M11.03 7.61v8.47l.36-.23c.24-.16.55-.16.8-.01l.34.21V7.61a2.08 2.08 0 0 1-1.5 0M6.115 8.612a.5.5 0 0 0-.897.002l-2.667 5.46a.5.5 0 0 0 .004.448 3.33 3.33 0 0 0 2.99 1.824c1.226 0 2.416-.643 3.225-1.758a.5.5 0 0 0 .043-.516zM21.448 12.011l-2.698-5.46a.501.501 0 0 0-.898.002l-2.667 5.46a.5.5 0 0 0 .005.448 3.33 3.33 0 0 0 2.988 1.825c1.228 0 2.417-.644 3.227-1.759a.5.5 0 0 0 .043-.516" />
    </G>
  </Svg>
);
export default IconlystScaleBulk;
