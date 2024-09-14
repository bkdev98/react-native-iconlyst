import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightTwiceBold = ({
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
      d="M21.418 16.035c0-.092-.029-.177-.053-.262-.011-.038-.008-.08-.024-.117a1 1 0 0 0-.227-.336l-3.954-3.953a.999.999 0 1 0-1.414 1.414L18 15.037H4.582a1 1 0 1 0 0 2h13.425l-2.261 2.258a1 1 0 0 0 1.414 1.415l3.965-3.962a1 1 0 0 0 .293-.709zM4.582 8.586h5.804l-1.875 1.875a1 1 0 1 0 1.414 1.415l3.546-3.547a1 1 0 0 0 .038-1.452L9.925 3.293a.999.999 0 1 0-1.414 1.414l1.88 1.88H4.581a1 1 0 1 0 0 2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightTwiceBold;
