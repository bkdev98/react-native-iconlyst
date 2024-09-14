import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGooglePlayBold = ({
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
      d="M3.887 4.564c-.137-.133-.362-.106-.442.067-.163.351-.25.732-.25 1.127v13.5c0 .4.09.778.246 1.12.079.174.305.201.442.068l7.944-7.724a.3.3 0 0 0 0-.43zM12.914 11.258a.3.3 0 0 0 .419 0l2.657-2.584a.3.3 0 0 0-.062-.477L7.294 3.362a2.74 2.74 0 0 0-2.166-.228c-.198.063-.238.312-.09.457zM13.332 13.758a.3.3 0 0 0-.418 0l-7.879 7.66c-.148.144-.109.392.088.456.26.085.535.134.824.134.455 0 .915-.117 1.335-.343l8.678-4.81a.3.3 0 0 0 .063-.478zM20.46 11.218a2.8 2.8 0 0 0-1.062-1.077l-1.574-.88a.3.3 0 0 0-.356.046c-.502.493-2.067 2.03-3.048 2.986a.3.3 0 0 0 0 .43c.992.968 2.583 2.53 3.089 3.027a.3.3 0 0 0 .355.049l1.521-.844a2.72 2.72 0 0 0 1.312-1.649 2.72 2.72 0 0 0-.237-2.088"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGooglePlayBold;
