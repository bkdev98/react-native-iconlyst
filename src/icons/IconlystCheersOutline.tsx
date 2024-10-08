import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCheersOutline = ({
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
      d="M12.525 7.912a.75.75 0 0 1 .662-.69l4.948-.566a.75.75 0 0 1 .802.522c.35 1.125.712 2.719.837 4.337.124 1.593.03 3.329-.639 4.652-.912 1.806-3.476 2.1-4.773.547-.95-1.139-1.434-2.808-1.674-4.388a20.6 20.6 0 0 1-.163-4.414m1.462.73a19 19 0 0 0 .184 3.459c.228 1.499.66 2.834 1.343 3.651.605.725 1.856.582 2.282-.26.48-.952.6-2.35.483-3.861a19 19 0 0 0-.602-3.412zM11.872 7.137a.75.75 0 0 0-.63-.72l-4.916-.795a.75.75 0 0 0-.825.484A20.6 20.6 0 0 0 4.463 10.4c-.197 1.586-.183 3.324.423 4.677.827 1.846 3.375 2.258 4.742.767 1.002-1.093 1.564-2.738 1.876-4.306.317-1.591.401-3.223.368-4.401m-1.494.66a19 19 0 0 1-.345 3.448c-.296 1.487-.79 2.8-1.51 3.585-.638.696-1.882.495-2.268-.367-.436-.972-.49-2.374-.303-3.878.151-1.217.451-2.423.76-3.38z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.638 9.961a.75.75 0 0 1 1.034-.236 12.3 12.3 0 0 0 2.464 1.157c1.027.344 1.987.48 2.663.284a.75.75 0 1 1 .419 1.44c-1.132.329-2.46.066-3.559-.302a13.8 13.8 0 0 1-2.785-1.309.75.75 0 0 1-.236-1.034M11.665 9.178a.75.75 0 0 0-1.022-.284 12.3 12.3 0 0 1-2.515 1.042c-1.042.296-2.007.387-2.673.16a.75.75 0 0 0-.486 1.419c1.115.381 2.454.18 3.569-.137a13.8 13.8 0 0 0 2.843-1.178.75.75 0 0 0 .284-1.022M16.72 16.215a.75.75 0 0 1 .83.66l.43 3.765.994-.113a.75.75 0 0 1 .17 1.49l-1.72.197-.018.002-.017.002-1.721.197a.75.75 0 1 1-.171-1.49l.993-.114-.43-3.765a.75.75 0 0 1 .66-.83M7.273 15.26a.75.75 0 0 1 .623.858l-.59 3.722.975.158a.75.75 0 1 1-.24 1.48l-3.454-.558a.75.75 0 1 1 .24-1.48l.998.16.59-3.717a.75.75 0 0 1 .858-.623M8.788 3.503a.75.75 0 0 0-.044 1.06l.947 1.028a.75.75 0 0 0 1.103-1.015l-.946-1.03a.75.75 0 0 0-1.06-.043M16.354 4.46a.75.75 0 0 1-.196 1.042l-1.154.789a.75.75 0 1 1-.847-1.238l1.154-.79a.75.75 0 0 1 1.043.196M12.857 2.441a.75.75 0 0 1 .64.846l-.191 1.385a.75.75 0 1 1-1.486-.206l.191-1.385a.75.75 0 0 1 .846-.64"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCheersOutline;
