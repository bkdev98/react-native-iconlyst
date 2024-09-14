import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystYahooOutline = ({
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
      d="M20.485 10.223a.75.75 0 0 1 .75.75v4.114a.75.75 0 1 1-1.5 0v-4.114a.75.75 0 0 1 .75-.75M2.25 5.828a.75.75 0 0 1 .75-.75h6.171a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M12.536 7.887a.75.75 0 0 1 .75-.75h5.143a.75.75 0 0 1 0 1.5h-5.143a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.689 5.192a.75.75 0 0 1 1.033.239l4.594 7.35 4.48-5.376a.75.75 0 1 1 1.152.96l-5.143 6.172a.75.75 0 0 1-1.212-.083L5.45 6.226a.75.75 0 0 1 .239-1.034"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.228 13.309a.75.75 0 0 1 .75.75v4.114a.75.75 0 0 1-1.5 0v-4.114a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.479 18.172a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75M19.492 18.173a.993.993 0 1 1 1.987 0 .993.993 0 0 1-1.987 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystYahooOutline;
