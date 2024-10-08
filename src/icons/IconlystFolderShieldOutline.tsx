import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderShieldOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.699 4.237c.911-1.144 2.309-1.69 4.139-1.69h1.876a2.89 2.89 0 0 1 2.309 1.155l.856 1.138c.264.35.676.556 1.114.557h2.652c1.801 0 3.207.46 4.134 1.547C21.684 8.004 22 9.508 22 11.283v.004l-.026 4.65v.003c0 1.824-.54 3.366-1.628 4.453s-2.63 1.628-4.455 1.628H8.595c-1.829 0-3.374-.54-4.464-1.628S2.5 17.763 2.5 15.938V8.624c0-1.742.316-3.279 1.199-4.387m1.173.935C4.3 5.89 4 7.017 4 8.624v7.314c0 1.53.449 2.653 1.19 3.394.743.74 1.87 1.189 3.405 1.189h7.296c1.531 0 2.654-.448 3.395-1.189.74-.74 1.188-1.864 1.188-3.394v-.004l.026-4.651v-.002c0-1.647-.305-2.71-.861-3.363-.534-.625-1.431-1.021-2.994-1.021h-2.654a2.9 2.9 0 0 1-2.31-1.155l-.857-1.138-.001-.001a1.39 1.39 0 0 0-1.109-.556H7.838c-1.526 0-2.422.442-2.966 1.125"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.89 9.762c.09-.02.229-.047.361-.047s.27.027.361.047q.167.037.36.093c.256.073.559.17.852.274.293.103.588.216.83.319.12.051.236.105.335.157.071.037.223.118.34.237l.01.009c.054.054.193.192.272.412.07.193.074.392.075.53q0 .184-.006.49l-.003.19c-.006.307-.012.715-.012 1.265 0 1.452-.88 2.406-1.644 2.956a6 6 0 0 1-1.505.774l-.031.01-.01.004h-.004l-.002.001-.218-.717-.218.718-.002-.001-.003-.001-.01-.003-.032-.01-.105-.037a5.887 5.887 0 0 1-1.4-.738c-.763-.55-1.643-1.504-1.643-2.956a67 67 0 0 0-.015-1.458q-.007-.305-.006-.487c0-.138.005-.338.074-.53.08-.22.219-.36.274-.414l.008-.008.002-.002c.117-.117.268-.197.34-.234a5 5 0 0 1 .334-.156 15.435 15.435 0 0 1 1.681-.594c.127-.036.25-.069.36-.093m.361 7.004-.218.718a.75.75 0 0 0 .435 0zm0-.799-.113-.048a4.4 4.4 0 0 1-.78-.442c-.568-.409-1.02-.969-1.02-1.74 0-.56-.006-.978-.012-1.291l-.004-.216c-.003-.149-.005-.26-.005-.348q.053-.025.122-.054a14.022 14.022 0 0 1 1.503-.53 5 5 0 0 1 .31-.079l.04.009q.101.021.269.07a14 14 0 0 1 1.625.584c0 .088-.002.2-.005.352l-.004.212c-.006.313-.012.73-.012 1.292 0 .77-.452 1.33-1.02 1.738a4.4 4.4 0 0 1-.894.491m-.22.082"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderShieldOutline;
