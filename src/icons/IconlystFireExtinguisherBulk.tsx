import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFireExtinguisherBulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M13.214 6.392v-1.5h1.107q-.003.052-.004.105V6.3l.003.092zM11.713 7.24a4.304 4.304 0 0 1 3.541 4.209h-2.39a1.75 1.75 0 0 0-1.75 1.75v1.624c0 .967.784 1.75 1.75 1.75h2.391v1.145H6.641V11.48a4.307 4.307 0 0 1 5.072-4.24M8.683 4.892v1.5h-.22A2.763 2.763 0 0 0 5.7 9.155a.75.75 0 0 1-1.5 0 4.263 4.263 0 0 1 4.263-4.263zM6.641 19.218v.912a1.5 1.5 0 0 0 1.5 1.5h5.614a1.5 1.5 0 0 0 1.5-1.5v-.912z" />
      <Path d="M15.255 15.073V12.95h-2.39a.25.25 0 0 0-.25.25v1.624c0 .138.112.25.25.25zM15.255 11.48v-.03z" />
    </G>
    <Path
      fill={props.color}
      d="M10.433 2.37a1.75 1.75 0 0 0-1.75 1.75v3.696a4.3 4.3 0 0 1 1.5-.575V4.12a.25.25 0 0 1 .25-.25h1.03a.25.25 0 0 1 .25.25v3.12a4.3 4.3 0 0 1 1.5.575V4.12a1.75 1.75 0 0 0-1.75-1.75zM19.8 4.547a1.3 1.3 0 0 0-1.5-1.284l-2.883.45a1.3 1.3 0 0 0-1.1 1.284V6.3a1.3 1.3 0 0 0 1.106 1.285l2.882.436A1.3 1.3 0 0 0 19.8 6.736zM15.255 16.573v-1.5h-2.39a.25.25 0 0 1-.25-.25V13.2a.25.25 0 0 1 .25-.25h2.39v-1.5h-2.39a1.75 1.75 0 0 0-1.75 1.75v1.624c0 .967.783 1.75 1.75 1.75zM6.641 17.718v1.5h8.614v-1.5z"
    />
  </Svg>
);
export default IconlystFireExtinguisherBulk;
