import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpotifyBold = ({
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
      d="M17.653 11.405a.75.75 0 0 1-1.037.223 10.61 10.61 0 0 0-9.382-1.055.75.75 0 1 1-.518-1.408c3.536-1.301 7.541-.85 10.715 1.203a.75.75 0 0 1 .222 1.037m-1.487 2.47a.75.75 0 0 1-1.044.189c-1.865-1.292-4.371-1.583-6.704-.777a.749.749 0 1 1-.489-1.418c2.783-.961 5.791-.601 8.048.963a.75.75 0 0 1 .189 1.043m-.994 2.462a.753.753 0 0 1-1.034.237c-1.502-.941-3.277-1.137-4.872-.544a.75.75 0 1 1-.525-1.404c2.035-.762 4.291-.515 6.193.676.351.22.457.683.238 1.035M12 3.009c-5.239 0-9.5 4.26-9.5 9.5 0 5.238 4.261 9.5 9.5 9.5s9.5-4.262 9.5-9.5c0-5.24-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpotifyBold;
