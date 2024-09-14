import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChoclateOutline = ({
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
      d="M16.435 5.37c.419.28 1.07.44 2.083.5.975.05 1.77.85 1.77 1.86v10.55c0 1.92-1.552 3.47-3.465 3.47H7.677a3.465 3.465 0 0 1-3.465-3.47V5.72c0-1.92 1.552-3.47 3.465-3.47h6.138c.974 0 1.715.74 1.844 1.64.118.81.402 1.22.776 1.48m2.353 10.5H13v4.38h3.823c1.085 0 1.965-.88 1.965-1.97zM11.5 20.25v-4.38H5.712v2.41c0 1.09.88 1.97 1.965 1.97zm-5.788-5.88H11.5V10H5.712zm0-5.87H11.5V3.75H7.677c-1.085 0-1.965.88-1.965 1.97zM13 3.75V8.5h5.788v-.77a.36.36 0 0 0-.15-.292.4.4 0 0 0-.205-.068c-1.08-.06-2.07-.24-2.836-.76-.812-.55-1.261-1.39-1.422-2.51-.033-.23-.202-.35-.36-.35zM18.788 10H13v4.37h5.788z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChoclateOutline;
