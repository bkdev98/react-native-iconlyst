import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefresh4Bulk = ({
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
      d="m4.928 6.71-.89-1.04a1 1 0 0 1 .652-1.644l4.248-.462a.999.999 0 0 1 1.08 1.232L8.982 9.014a.998.998 0 0 1-1.73.412l-.985-1.15a6.98 6.98 0 0 0-.733 6.646 6.99 6.99 0 0 0 3.779 3.825 6.95 6.95 0 0 0 5.367.033 1 1 0 0 1 .756 1.851 9 9 0 0 1-3.401.672 9 9 0 0 1-3.5-.712 8.97 8.97 0 0 1-4.853-4.915c-1.268-3.125-.691-6.51 1.246-8.967"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M19.422 10.14a1 1 0 0 1-.707-.293l-.007-.007a.996.996 0 0 1 .003-1.41 1.004 1.004 0 0 1 1.418.003.999.999 0 0 1-.707 1.707M13.192 5.33a1 1 0 0 1-1.145-.831l-.006-.042a.98.98 0 0 1 .834-1.123c.546-.085 1.061.308 1.147.852a1 1 0 0 1-.83 1.145M19.233 13.89a.997.997 0 0 1 .098-1.408 1.001 1.001 0 1 1-.091 1.415zM16.172 5.157a1.005 1.005 0 0 1 1.418.003.999.999 0 1 1-1.414 1.414l-.007-.006a.996.996 0 0 1 .003-1.411M19.021 16.277a1 1 0 0 1-1.172 1.62l-.009-.005a.995.995 0 0 1-.22-1.393 1.004 1.004 0 0 1 1.401-.222" />
    </G>
  </Svg>
);
export default IconlystRefresh4Bulk;
