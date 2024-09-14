import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMasterCardBulk = ({
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
      d="M18.095 3.21H6.904C3.971 3.21 2 5.273 2 8.34v7.32c0 3.069 1.971 5.13 4.904 5.13h11.19c2.934 0 4.906-2.061 4.906-5.13V8.34c0-3.068-1.972-5.13-4.905-5.13"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.493 16.03c-.73 0-1.403-.21-1.993-.55-.59.34-1.265.55-1.993.55A4.03 4.03 0 0 1 6.483 12a4.026 4.026 0 0 1 4.024-4.02c.728 0 1.403.21 1.993.55a4 4 0 0 1 1.993-.55A4.025 4.025 0 0 1 18.516 12a4.03 4.03 0 0 1-4.023 4.03m-3.218-6.417A3.98 3.98 0 0 0 10.47 12c0 .901.307 1.724.807 2.396-.244.079-.5.133-.77.133a2.524 2.524 0 0 1 0-5.049c.27 0 .524.054.768.133m1.225 3.92A2.5 2.5 0 0 1 11.97 12c0-.577.203-1.102.53-1.527.327.425.53.95.53 1.527 0 .58-.203 1.106-.53 1.533m1.225-3.92a2.5 2.5 0 0 1 .768-.133 2.524 2.524 0 0 1 0 5.05c-.27 0-.526-.054-.77-.133A4 4 0 0 0 14.53 12c0-.899-.306-1.72-.805-2.389"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMasterCardBulk;
