import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashFireOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.264 11.219a.75.75 0 0 1 .75-.75h1.559a.75.75 0 1 1 0 1.5h-1.56a.75.75 0 0 1-.75-.75M18.052 6.798a.75.75 0 0 1 .274-1.025l1.35-.779a.75.75 0 1 1 .75 1.3l-1.35.778a.75.75 0 0 1-1.024-.274M18.052 15.643a.75.75 0 0 0 .274 1.025l1.35.78a.75.75 0 1 0 .75-1.3l-1.35-.78a.75.75 0 0 0-1.024.275M5.88 11.219a.75.75 0 0 0-.75-.75H3.573a.75.75 0 1 0 0 1.5h1.559a.75.75 0 0 0 .75-.75M7.092 6.798a.75.75 0 0 0-.275-1.025l-1.35-.779a.75.75 0 1 0-.75 1.3l1.35.778a.75.75 0 0 0 1.025-.274M7.092 15.643a.75.75 0 0 1-.275 1.025l-1.35.78a.75.75 0 1 1-.75-1.3l1.35-.78a.75.75 0 0 1 1.025.275M10.936 6.094l-2.537 6.19h2.495c.778 0 1.345.738 1.145 1.49l-.933 3.498 5.37-6.13h-2.843a1.184 1.184 0 0 1-1.1-1.623l1.46-3.425zm-1.3179999999999998-.7400000000000002c.175-.457.615-.76 1.106-.76h3.748a1.184 1.184 0 0 1 1.099 1.623l-1.46 3.425h3.061c1.018 0 1.562 1.2.89 1.965l-6.719 7.67c-.825.942-2.358.124-2.035-1.086l1.175-4.407H7.928a1.184 1.184 0 0 1-1.102-1.618z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlashFireOutline;
