import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserOutline = ({
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
      d="M9.43 15.532c-.883-.218-1.41-.295-1.808-.153-1.327.473-2.047 1.53-2.054 2.743.029.519.212.913.48 1.176.269.262.68.45 1.272.45h10.16c.589 0 .999-.187 1.267-.45.269-.263.453-.66.485-1.18 0-1.205-.718-2.26-2.056-2.735-.398-.141-.927-.064-1.809.154q-.123.03-.252.063c-.766.191-1.706.427-2.716.419-1.008.006-1.947-.23-2.712-.423zm.616-1.392c.786.196 1.54.384 2.349.379h.012c.809.007 1.564-.18 2.351-.377l.25-.062c.805-.198 1.78-.426 2.67-.11 1.905.676 3.065 2.282 3.053 4.174v.036c-.045.843-.353 1.62-.934 2.19-.586.573-1.39.878-2.317.878H7.32c-.927 0-1.734-.304-2.32-.878-.583-.57-.89-1.349-.93-2.195l-.002-.017v-.018c0-1.888 1.152-3.497 3.05-4.174.89-.317 1.866-.09 2.671.11q.13.03.257.063M12.408 4.25a3.314 3.314 0 1 0 0 6.628 3.314 3.314 0 0 0 0-6.628M7.594 7.564a4.814 4.814 0 1 1 9.628 0 4.814 4.814 0 0 1-9.628 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserOutline;
