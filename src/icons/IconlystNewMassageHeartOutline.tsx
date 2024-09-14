import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewMassageHeartOutline = ({
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
      d="M3.945 4.333c.957-1.033 2.323-1.61 3.94-1.61h3.928a.75.75 0 0 1 0 1.5H7.884c-1.244 0-2.195.435-2.84 1.13C4.394 6.054 4 7.083 4 8.358v7.678c0 1.28.388 2.304 1.032 3.002.638.69 1.588 1.125 2.852 1.125h8.17c1.245 0 2.196-.434 2.84-1.127.65-.699 1.044-1.724 1.044-3v-4.15a.75.75 0 0 1 1.5 0v4.15c0 1.584-.493 2.997-1.445 4.022-.958 1.03-2.324 1.605-3.94 1.605H7.885c-1.63 0-2.998-.573-3.953-1.607-.949-1.026-1.431-2.44-1.431-4.02V8.358c0-1.584.493-2.999 1.445-4.025"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.467 15.035a.75.75 0 0 1 .75-.75h3.75a.75.75 0 1 1 0 1.5h-3.75a.75.75 0 0 1-.75-.75M17.159 3.883c-.51.166-.807.764-.584 1.462.181.562.697 1.126 1.267 1.589.243.197.476.36.659.48.185-.121.42-.287.666-.487.574-.466 1.087-1.03 1.259-1.578l.001-.003c.223-.696-.074-1.296-.585-1.462a1 1 0 0 0-.893.152.75.75 0 0 1-.896-.002 1 1 0 0 0-.894-.15m1.343 4.41-.36.658-.003-.002-.007-.004-.023-.013-.08-.045a9.542 9.542 0 0 1-1.133-.789c-.626-.508-1.43-1.303-1.749-2.294v-.001c-.398-1.242.03-2.857 1.553-3.348h.003a2.5 2.5 0 0 1 1.8.111 2.5 2.5 0 0 1 1.791-.113l.005.002c1.52.49 1.954 2.103 1.557 3.346-.31.986-1.117 1.782-1.742 2.29a10 10 0 0 1-1.218.84l-.023.013-.007.004-.002.002c-.001 0-.002 0-.362-.657m0 0 .361.657a.75.75 0 0 1-.72.001zm-.362-.657"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNewMassageHeartOutline;
