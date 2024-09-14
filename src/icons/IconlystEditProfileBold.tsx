import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditProfileBold = ({
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
      d="M15.26 9.227a1.53 1.53 0 0 0 1.295.39l.71-.118a2.4 2.4 0 0 0 1.404-.773l2.723-3.002a1.717 1.717 0 0 0-.091-2.423l-.648-.594a1.69 1.69 0 0 0-1.231-.456c-.457.018-.88.213-1.195.554L15.46 5.858a2.47 2.47 0 0 0-.603 1.353l-.08.734c-.047.484.13.951.484 1.282m4.074-5.41a.21.21 0 0 1 .3-.007l.648.593c.085.079.09.215.005.308l-2.738 3.017a.92.92 0 0 1-.53.291l-.751.08.08-.72a1 1 0 0 1 .23-.523z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M2.452 12.333c0 5.192 4.226 9.416 9.42 9.416 5.188 0 9.41-4.224 9.41-9.416q0-.429-.032-.849a.76.76 0 0 0-.807-.689.75.75 0 0 0-.689.807q.029.362.028.731a7.91 7.91 0 0 1-3.165 6.33c-.558-1.392-2.09-2.532-4.767-2.532-2.657 0-4.188 1.129-4.755 2.512a7.9 7.9 0 0 1-3.143-6.31c0-4.364 3.553-7.915 7.92-7.915.327 0 .66.02.987.061a.749.749 0 1 0 .186-1.488 9 9 0 0 0-1.173-.073c-5.194 0-9.42 4.224-9.42 9.415"
    />
    <Path
      fill={props.color}
      d="M11.85 15.312a3.167 3.167 0 0 0 3.163-3.163 3.166 3.166 0 0 0-3.163-3.163 3.166 3.166 0 0 0-3.163 3.163 3.167 3.167 0 0 0 3.163 3.163"
    />
  </Svg>
);
export default IconlystEditProfileBold;
