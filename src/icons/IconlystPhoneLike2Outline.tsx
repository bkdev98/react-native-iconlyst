import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneLike2Outline = ({
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
      d="M5.965 3.532C6.735 2.706 7.826 2.25 9.1 2.25h6.249c1.277 0 2.37.456 3.139 1.282.764.82 1.153 1.946 1.153 3.192v10.552c0 1.247-.39 2.371-1.154 3.192-.77.826-1.862 1.282-3.14 1.282H9.1c-1.277 0-2.37-.456-3.138-1.282-.764-.82-1.153-1.946-1.153-3.192V6.724c0-1.247.391-2.372 1.156-3.192m1.097 1.023c-.463.496-.753 1.233-.753 2.169v10.552c0 .937.29 1.674.75 2.17.456.49 1.135.804 2.041.804h6.248c.907 0 1.586-.315 2.042-.805.461-.495.751-1.232.751-2.169V6.724c0-.937-.29-1.674-.751-2.17-.456-.49-1.135-.804-2.041-.804H9.1c-.902 0-1.581.314-2.038.805"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.96 10.403c-.426.138-.693.644-.496 1.261.16.498.622 1.006 1.142 1.428.206.168.403.308.564.415a7 7 0 0 0 .572-.42c.524-.427.982-.934 1.134-1.418l.001-.004c.197-.615-.069-1.122-.496-1.261a.85.85 0 0 0-.763.129.75.75 0 0 1-.896-.001.85.85 0 0 0-.762-.13m1.211 3.984-.36.659v-.001l-.003-.001-.006-.004-.022-.012-.074-.043a8.795 8.795 0 0 1-1.047-.729c-.575-.468-1.324-1.206-1.623-2.133v-.001c-.37-1.16.026-2.683 1.465-3.147h.002a2.35 2.35 0 0 1 1.67.092 2.36 2.36 0 0 1 1.66-.094l.005.002c1.437.463 1.84 1.983 1.469 3.145-.29.922-1.043 1.662-1.618 2.13a9 9 0 0 1-1.125.777l-.022.012-.006.004h-.002l-.002.002zm0 0 .361.657a.75.75 0 0 1-.72.002zM4.814 17.4a.75.75 0 0 1 .75-.75h13.33a.75.75 0 0 1 0 1.5H5.563a.75.75 0 0 1-.75-.75M4.814 6.6a.75.75 0 0 1 .75-.75h13.33a.75.75 0 0 1 0 1.5H5.563a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneLike2Outline;
