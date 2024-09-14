import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartCloseBold = ({
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
      d="M7.235 19.04a1.232 1.232 0 1 0 .002 2.465 1.232 1.232 0 0 0-.002-2.465M18.259 19.04c-.68 0-1.232.552-1.232 1.231a1.232 1.232 0 1 0 1.232-1.231M15.308 12.484a.75.75 0 1 1-1.06 1.061l-.935-.935-.93.932a.747.747 0 0 1-1.06 0 .75.75 0 0 1 0-1.06l.93-.932-.93-.932a.749.749 0 1 1 1.06-1.06l.93.931.934-.934a.75.75 0 1 1 1.061 1.061l-.934.934zm6.034-5.416a2.05 2.05 0 0 0-1.355-.805c-.07-.009-.114-.016-13.989-.02l-.227-2.708a.75.75 0 0 0-.619-.677l-2.024-.35a.75.75 0 1 0-.256 1.478l1.453.251.888 10.585a2.515 2.515 0 0 0 2.491 2.297H18.33a2.514 2.514 0 0 0 2.475-2.147l.923-6.38a2.04 2.04 0 0 0-.386-1.524"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShoppingCartCloseBold;
