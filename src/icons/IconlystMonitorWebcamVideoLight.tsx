import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorWebcamVideoLight = ({
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
      d="M8.696 3.285H7.029A4.03 4.03 0 0 0 3 7.315v5.455a4.03 4.03 0 0 0 4.029 4.03h9.942A4.03 4.03 0 0 0 21 12.77v-1.276"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.426 3.285H13.45c-1.156 0-1.88.82-1.88 1.977v2.23c0 1.159.72 1.977 1.88 1.977h2.977c1.16 0 1.882-.818 1.882-1.977v-2.23c0-1.158-.722-1.977-1.882-1.977"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.305 5.841 1.664-1.362a.631.631 0 0 1 1.032.489l-.007 2.817a.63.63 0 0 1-1.031.487L18.305 6.91M7.055 20.715h9.888M9.883 16.797l-.637 3.917M14.115 16.797l.637 3.917"
    />
  </Svg>
);
export default IconlystMonitorWebcamVideoLight;
