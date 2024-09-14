import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoardBold = ({
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
      d="M12.75 4.12V3a.75.75 0 0 0-1.5 0v1.12H7.36A4.265 4.265 0 0 0 3.1 8.38v5.09a4.265 4.265 0 0 0 4.26 4.26h3.128l-2.696 2.745a.749.749 0 1 0 1.07 1.05l3.139-3.195 3.137 3.195a.747.747 0 0 0 1.06.01c.296-.29.3-.764.01-1.06l-2.695-2.745h3.127a4.265 4.265 0 0 0 4.26-4.26V8.38a4.265 4.265 0 0 0-4.26-4.26zM9.086 9.79h5.828a.75.75 0 0 0 0-1.5H9.086a.75.75 0 0 0 0 1.5m0 3.479h3.017a.75.75 0 1 0 0-1.5H9.086a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBoardBold;
