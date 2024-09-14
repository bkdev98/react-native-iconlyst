import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsBigArrowLeftUpOutline = ({
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
      d="M5.459 5.256a.192.192 0 0 0-.203.203l.506 8.593 2.148-2.148a.75.75 0 0 1 1.06 0l3.966 3.966a.19.19 0 0 0 .271 0l2.663-2.663a.19.19 0 0 0 0-.27L11.904 8.97a.75.75 0 0 1 0-1.06l2.148-2.148zl.044-.749zm.088-1.497 9.214.542c1.051.062 1.536 1.337.791 2.082L13.495 8.44l3.436 3.436c.66.66.66 1.731 0 2.392l-2.663 2.663c-.66.66-1.732.66-2.392 0L8.44 13.495l-2.057 2.057c-.745.745-2.02.26-2.082-.791l-.542-9.214a1.692 1.692 0 0 1 1.788-1.788M20.025 14.995a.75.75 0 0 1 0 1.06l-3.97 3.97a.75.75 0 1 1-1.06-1.061l3.969-3.97a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsBigArrowLeftUpOutline;
