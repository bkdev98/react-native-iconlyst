import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProfileOutlinesharp = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.216 4a3.67 3.67 0 1 0-.002 7.34A3.67 3.67 0 0 0 12.216 4M7.045 7.67a5.17 5.17 0 1 1 10.34 0 5.17 5.17 0 0 1-10.34 0M6.129 19.685c1.784.937 3.86 1.32 6.12 1.315h.003c2.258.006 4.335-.378 6.119-1.315-1.025-2.446-3.311-3.623-6.12-3.616h-.003c-2.811-.007-5.094 1.167-6.12 3.616m6.12-5.116c-3.499-.009-6.615 1.62-7.757 5.23l-.177.56.502.306c2.204 1.343 4.767 1.841 7.433 1.835 2.666.006 5.229-.492 7.433-1.835l.502-.306-.177-.56c-1.14-3.607-4.262-5.238-7.758-5.23"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystProfileOutlinesharp;
