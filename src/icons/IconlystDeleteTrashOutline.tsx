import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeleteTrashOutline = ({
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
      d="M4.397 9.555a.75.75 0 0 1 .75-.75h14.706a.75.75 0 0 1 0 1.5H5.147a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.869 8.807a.75.75 0 0 1 .808.687l.797 9.73a1.95 1.95 0 0 0 1.944 1.791h6.163a1.95 1.95 0 0 0 1.944-1.79l.797-9.731a.75.75 0 1 1 1.495.122l-.797 9.73a3.45 3.45 0 0 1-3.439 3.17H9.418a3.45 3.45 0 0 1-3.439-3.17l-.797-9.73a.75.75 0 0 1 .687-.809"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.683 7.584c-.337-.371-.827-.603-1.495-.538-.509.05-1.016.446-1.469 1.04a.75.75 0 0 1-1.192-.91c.523-.685 1.366-1.511 2.516-1.623 1.143-.111 2.097.303 2.75 1.021.637.701.959 1.655.959 2.612a.75.75 0 0 1-1.5 0c0-.637-.216-1.215-.569-1.602"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.926 5.862c-.473-.437-1.156-.847-2.078-.846A3.1 3.1 0 0 0 7.97 9.275a.75.75 0 0 1-1.39.56 4.601 4.601 0 0 1 4.269-6.32c1.407 0 2.437.637 3.096 1.246a5.4 5.4 0 0 1 .92 1.12l.051.087.015.027.005.01.002.003v.001c.001.001.001.001-.663.35l.664-.349a.75.75 0 0 1-1.327.7m0 0-.004-.008-.027-.046a3.926 3.926 0 0 0-.655-.794M12.788 22.324a.75.75 0 0 0 .025-1.06l-5.828-6.106A.75.75 0 0 0 5.9 16.194l5.828 6.105c.286.3.76.31 1.06.025"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.917 21.603a.75.75 0 0 0 .035-1.06L7.212 9.058a.75.75 0 1 0-1.096 1.024l10.74 11.484a.75.75 0 0 0 1.06.035"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.941 21.466a.75.75 0 0 1-.035-1.06L17.518 9.059a.75.75 0 1 1 1.095 1.025L8.002 21.43a.75.75 0 0 1-1.06.036M5.914 16.216a.75.75 0 0 1-.004-1.06l6.086-6.128a.75.75 0 1 1 1.064 1.057l-6.085 6.127a.75.75 0 0 1-1.061.004M12.269 22.326a.75.75 0 0 1-.029-1.06l5.784-6.106a.75.75 0 1 1 1.089 1.032l-5.784 6.105a.75.75 0 0 1-1.06.029"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.094 16.218a.75.75 0 0 0 .008-1.06l-6.04-6.128a.75.75 0 0 0-1.068 1.053l6.04 6.127a.75.75 0 0 0 1.06.008"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeleteTrashOutline;
