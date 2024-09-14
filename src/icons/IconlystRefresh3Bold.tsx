import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefresh3Bold = ({
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
      d="M4.578 10.14a1 1 0 0 0 .707-.293l.007-.007a.996.996 0 0 0-.003-1.41 1.004 1.004 0 0 0-1.418.003.999.999 0 0 0 .707 1.707M10.808 5.33q.08.013.158.013a1 1 0 0 0 .987-.843l.006-.043a.98.98 0 0 0-.834-1.123c-.546-.085-1.061.308-1.147.852a1 1 0 0 0 .83 1.145M4.767 13.89a.997.997 0 0 0-.098-1.408 1.001 1.001 0 1 0 .091 1.415zM7.828 5.157a1.005 1.005 0 0 0-1.418.003.999.999 0 1 0 1.414 1.414l.007-.006a.996.996 0 0 0-.003-1.411M4.979 16.277a1 1 0 0 0 1.172 1.62l.009-.005a.995.995 0 0 0 .22-1.393 1.004 1.004 0 0 0-1.401-.222M19.072 6.71l.89-1.04a1 1 0 0 0-.652-1.644l-4.248-.462a.998.998 0 0 0-1.08 1.232l1.036 4.218a.998.998 0 0 0 1.73.412l.985-1.15a6.98 6.98 0 0 1 .733 6.646 6.99 6.99 0 0 1-3.779 3.825 6.95 6.95 0 0 1-5.367.033 1 1 0 0 0-.756 1.851 9 9 0 0 0 3.401.672 9 9 0 0 0 3.5-.712 8.97 8.97 0 0 0 4.853-4.915c1.268-3.125.691-6.51-1.246-8.967"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefresh3Bold;
