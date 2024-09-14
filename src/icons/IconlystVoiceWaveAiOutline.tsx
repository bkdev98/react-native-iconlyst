import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoiceWaveAiOutline = ({
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
      d="M19.688 9.162a.75.75 0 0 1 .75.75v1.771a.75.75 0 0 1-1.5 0v-1.77a.75.75 0 0 1 .75-.75M15.523 5.959a.75.75 0 0 1 .75.75v4.089a.75.75 0 1 1-1.5 0V6.709a.75.75 0 0 1 .75-.75M7.195 6.09a.75.75 0 0 1 .75.75v10.45a.75.75 0 0 1-1.5 0V6.84a.75.75 0 0 1 .75-.75M3.031 9.426a.75.75 0 0 1 .75.75v3.911a.75.75 0 0 1-1.5 0v-3.911a.75.75 0 0 1 .75-.75M11.36 18.245a.75.75 0 0 1 .75.75v1.254a.75.75 0 0 1-1.5 0v-1.255a.75.75 0 0 1 .75-.75M11.36 3a.75.75 0 0 1 .75.75v4.125a.75.75 0 0 1-1.5 0V3.75a.75.75 0 0 1 .75-.75M17.153 14.3a.75.75 0 0 1 .703.49l.101.273a3.01 3.01 0 0 0 1.779 1.782l.273.101a.75.75 0 0 1 0 1.406l-.273.102a3.01 3.01 0 0 0-1.779 1.781l-.1.274a.75.75 0 0 1-1.408 0l-.1-.274a3.01 3.01 0 0 0-1.78-1.781l-.273-.101a.75.75 0 0 1 0-1.407l.273-.101a3.01 3.01 0 0 0 1.78-1.782l.1-.273a.75.75 0 0 1 .704-.49m-.949 3.35c.362.267.681.587.949.949.267-.362.587-.682.948-.95a4.5 4.5 0 0 1-.948-.95 4.5 4.5 0 0 1-.949.95M12 11.25a.75.75 0 0 1 .718.532c.132.435.472.775.905.907a.75.75 0 0 1 0 1.435 1.36 1.36 0 0 0-.905.907.75.75 0 0 1-1.436 0 1.36 1.36 0 0 0-.905-.907.75.75 0 0 1 0-1.435c.433-.132.773-.472.905-.907A.75.75 0 0 1 12 11.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVoiceWaveAiOutline;
