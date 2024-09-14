import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownTurnBold = ({
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
      d="M19.542 9.393v8.437a1 1 0 0 1-2 0V9.393a4.15 4.15 0 0 0-4.145-4.143 4.147 4.147 0 0 0-4.142 4.143v6.066h1.797a1 1 0 0 1 .805 1.594L9.06 20.844c-.014.017-.037.024-.05.041a1 1 0 0 1-.23.195c-.037.022-.066.052-.104.07a1 1 0 0 1-.421.1 1 1 0 0 1-.423-.1c-.038-.018-.067-.048-.104-.07a1 1 0 0 1-.23-.195c-.013-.017-.035-.024-.048-.041l-2.797-3.791a1.001 1.001 0 0 1 .805-1.594h1.797V9.393a6.15 6.15 0 0 1 6.142-6.143 6.15 6.15 0 0 1 6.143 6.143"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownTurnBold;
