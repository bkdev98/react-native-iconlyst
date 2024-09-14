import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunglassesBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M6.31 9.215c.134 0 .251-.09.297-.218A2.84 2.84 0 0 1 9.27 7.12c1.228 0 2.266.786 2.663 1.878a.32.32 0 0 0 .298.218h.563c.135 0 .252-.09.298-.218a2.84 2.84 0 0 1 2.664-1.878c1.227 0 2.266.786 2.663 1.878a.32.32 0 0 0 .298.218h2.277a.29.29 0 0 0 .278-.387c-1.3-3.586-4.742-6.156-8.772-6.156s-7.47 2.57-8.771 6.156a.29.29 0 0 0 .277.387zM21.486 10.715h-2.769a.32.32 0 0 0-.298.217 2.84 2.84 0 0 1-2.663 1.879 2.84 2.84 0 0 1-2.664-1.879.32.32 0 0 0-.298-.217h-.564a.32.32 0 0 0-.298.217 2.84 2.84 0 0 1-2.662 1.879 2.84 2.84 0 0 1-2.663-1.879.32.32 0 0 0-.298-.217H3.486c-.112 0-.223.057-.237.169A9 9 0 0 0 3.173 12c0 5.143 4.184 9.327 9.327 9.327 5.144 0 9.328-4.184 9.328-9.327 0-.37-.029-.734-.074-1.093-.015-.125-.142-.192-.268-.192" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.756 8.617c-.742 0-1.346.604-1.346 1.346s.604 1.346 1.346 1.346c.738 0 1.336-.597 1.343-1.334l-.002-.012.002-.012a1.346 1.346 0 0 0-1.343-1.334M14.043 15.801c-.686-.075-1.402.206-1.933.767a.75.75 0 0 1-1.06.03.75.75 0 0 1-.029-1.062c.852-.902 2.013-1.349 3.178-1.227a.75.75 0 0 1 .668.824.74.74 0 0 1-.824.668M9.27 8.617c-.741 0-1.345.604-1.345 1.346s.604 1.346 1.345 1.346c.74 0 1.342-.6 1.345-1.34l-.001-.006v-.005a1.35 1.35 0 0 0-1.344-1.34"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSunglassesBulk;
