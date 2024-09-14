import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBrainDataAiTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.664 14.693c.097 2.175 2.723 2.63 3.997 1.394.603 1.167 1.848 1.162 2.395 1.013l1.196 2.83c.012.03.04.049.07.049h1.689a.08.08 0 0 0 .077-.081v-1.723c2.208-.132 3.34-.887 3.815-1.755.257-.472.32-.977.255-1.433"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.202 9.521c-1.251 1.865-.762 4.149.927 5.175 1.123.682 2.713.584 3.534 0 .852-.606 1.334-1.653 1.255-2.478M6.986 5.546c.76-.447 2.05-1.236 3.71-1.462"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.277 11.382c-3.9-.993-1.236-7.724 3.457-5.291M14.25 17.047c.766-.206 1.126-.72 1.217-1.272"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.428 9.22.1-.273a3.76 3.76 0 0 1 2.222-2.225l.273-.101-.273-.101a3.76 3.76 0 0 1-2.221-2.225l-.101-.274-.101.274a3.76 3.76 0 0 1-2.222 2.225l-.273.101.273.101a3.76 3.76 0 0 1 2.222 2.225zM14.117 10.463a1.77 1.77 0 0 1 1.177-1.179 1.77 1.77 0 0 1-1.177-1.178 1.77 1.77 0 0 1-1.177 1.178 1.77 1.77 0 0 1 1.177 1.178"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBrainDataAiTwoTone;
