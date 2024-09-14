import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorWebcamVideoBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 12.77a4.03 4.03 0 0 0 4.029 4.03h9.942a4.03 4.03 0 0 0 4.029-4.03v-1.276M9.196 3.285H7.529A4.03 4.03 0 0 0 3.5 7.315v2.727M13.95 3.285c-1.157 0-1.882.82-1.882 1.977v2.23c0 1.159.721 1.977 1.881 1.977h2.977c1.16 0 1.882-.818 1.882-1.977v-2.23c0-1.158-.722-1.977-1.882-1.977"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.805 5.841 1.664-1.362a.631.631 0 0 1 1.032.489l-.007 2.817a.63.63 0 0 1-1.031.487L18.805 6.91M7.555 20.715h9.888M10.383 16.797l-.637 3.917M14.615 16.797l.637 3.917"
    />
  </Svg>
);
export default IconlystMonitorWebcamVideoBroken;