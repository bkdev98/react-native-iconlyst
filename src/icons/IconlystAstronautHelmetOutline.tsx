import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAstronautHelmetOutline = ({
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
      d="M14.587 3.675a1.195 1.195 0 0 1 1.594-.674 10.34 10.34 0 0 1 5.036 14.198 1.195 1.195 0 0 1-1.662.48l-6.24-3.602a.75.75 0 0 1 .75-1.3l5.962 3.443a8.837 8.837 0 0 0-4.153-11.71l-2.458 6.423a.75.75 0 0 1-1.4-.536z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.025 4.805a7.661 7.661 0 0 0-5.957 12.479c.248.307.41.7.412 1.13l.012 2.162a.25.25 0 0 0 .25.25h10.331a.25.25 0 0 0 .236-.335l-.502-1.397a.75.75 0 0 1 .217-.822 7.7 7.7 0 0 0 1.592-1.897.75.75 0 0 1 1.29.767 9.2 9.2 0 0 1-1.518 1.916l.333.926a1.75 1.75 0 0 1-1.648 2.341H6.743a1.75 1.75 0 0 1-1.75-1.74l-.013-2.162a.32.32 0 0 0-.078-.195A9.161 9.161 0 0 1 15.295 3.906a.75.75 0 1 1-.535 1.4 7.6 7.6 0 0 0-2.735-.502"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.979 18.043a.75.75 0 0 1 .75-.75h9.553a.75.75 0 0 1 0 1.5H5.729a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill="#D9D9D9"
      d="M13.873 12.467a1.846 1.846 0 1 1-3.692 0 1.846 1.846 0 0 1 3.692 0"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.027 11.37a1.096 1.096 0 1 0 0 2.193 1.096 1.096 0 0 0 0-2.193m-2.596 1.097a2.596 2.596 0 1 1 5.192 0 2.596 2.596 0 0 1-5.192 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAstronautHelmetOutline;
