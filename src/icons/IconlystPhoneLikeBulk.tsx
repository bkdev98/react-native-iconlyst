import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneLikeBulk = ({
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
      d="M16.084 17.12c-.47 0-.93-.16-1.29-.47-.33-.28-3.21-2.79-3.33-5.83-.05-1.17.3-2.32.98-3.22.8-1.04 1.94-1.64 3.24-1.7.38-.024.765.009 1.143.093.14.031.276-.085.246-.226A4.1 4.1 0 0 0 13.044 2.5h-5.51c-1.09 0-2.12.43-2.92 1.21-.77.77-1.2 1.8-1.2 2.9v10.77c0 2.27 1.85 4.12 4.12 4.12h5.51a4.12 4.12 0 0 0 4.12-4.12v-.189a.204.204 0 0 0-.253-.196 4 4 0 0 1-.477.095c-.12.02-.23.03-.35.03"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.294 18.28c-.56 0-1-.44-1-1 0-.55.44-1 1-1 .55 0 1 .45 1 1 0 .56-.45 1-1 1M20.26 8.606a2.9 2.9 0 0 0-1.294-.448c-.368-.041-.728.05-1.049.163-.235-.272-.49-.511-.815-.66a2.8 2.8 0 0 0-1.347-.265 2.78 2.78 0 0 0-2.113 1.114 3.45 3.45 0 0 0-.676 2.254c.095 2.433 2.687 4.65 2.797 4.742a.5.5 0 0 0 .409.11c.139-.024 3.441-.62 4.795-2.688l.001-.002c.865-1.337.837-3.318-.708-4.32"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneLikeBulk;
