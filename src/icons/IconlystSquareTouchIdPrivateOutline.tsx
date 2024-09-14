import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareTouchIdPrivateOutline = ({
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
      d="M4.014 4.852C4.996 3.8 6.394 3.21 8.045 3.21h8.408c1.655 0 3.054.59 4.036 1.643.976 1.048 1.483 2.495 1.483 4.118v4.042a.75.75 0 0 1-1.5 0V8.97c0-1.313-.407-2.372-1.08-3.095-.67-.718-1.654-1.166-2.939-1.166H8.045c-1.279 0-2.264.448-2.933 1.166-.675.724-1.084 1.783-1.084 3.095v7.922c0 1.313.407 2.372 1.08 3.096.668.717 1.653 1.165 2.937 1.165h4.528a.75.75 0 0 1 0 1.5H8.045c-1.655 0-3.053-.59-4.034-1.643-.976-1.049-1.483-2.495-1.483-4.118V8.97c0-1.624.51-3.07 1.486-4.118"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.251 9.186a3.81 3.81 0 0 0-3.319 1.931.75.75 0 1 1-1.304-.74 5.31 5.31 0 0 1 4.623-2.691c.723 0 1.416.145 2.047.409a.75.75 0 1 1-.578 1.384 3.8 3.8 0 0 0-1.469-.293"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.663 13.167a2.548 2.548 0 0 1 5.096 0v1.82a.75.75 0 1 1-1.5 0v-1.82a1.048 1.048 0 1 0-2.096 0v.482a.75.75 0 1 1-1.5 0zM15.549 9.76a.75.75 0 0 1 1.045.18c.612.866.97 1.922.97 3.062a.75.75 0 1 1-1.5 0c0-.82-.257-1.576-.695-2.196a.75.75 0 0 1 .18-1.045M10.413 15.06a.75.75 0 0 1 .75.75v1.617a.75.75 0 0 1-1.5 0V15.81a.75.75 0 0 1 .75-.75M7.687 12.815a.75.75 0 0 1 .75.75v2.826a.75.75 0 1 1-1.5 0v-2.826a.75.75 0 0 1 .75-.75M18.09 15.429c.08-.018.211-.044.338-.044s.258.026.34.044c.099.022.21.05.325.083a14 14 0 0 1 1.507.533c.107.046.213.094.304.142.063.033.209.11.324.226.123.125.231.283.289.506.044.17.05.353.05.508q.001.201-.005.516l-.003.163c-.005.293-.01.669-.01 1.158 0 1.33-.807 2.201-1.497 2.698a5.3 5.3 0 0 1-1.361.701l-.03.01-.01.003h-.003l-.001.001-.219-.717-.218.717h-.002l-.003-.001-.01-.003-.029-.01-.095-.033a5.321 5.321 0 0 1-1.265-.668c-.69-.497-1.497-1.369-1.497-2.698 0-.49-.005-.865-.01-1.158q0-.086-.003-.164-.007-.315-.006-.516c.001-.155.007-.337.051-.508a1.1 1.1 0 0 1 .292-.508l.53.53-.531-.528a1.3 1.3 0 0 1 .323-.225c.09-.048.196-.096.303-.142.217-.093.482-.194.744-.286.262-.093.532-.18.762-.246a5 5 0 0 1 .325-.084m.338 6.53-.217.718a.75.75 0 0 0 .435 0zm0-.8-.066-.028a4 4 0 0 1-.68-.386c-.494-.356-.873-.833-.873-1.481 0-.5-.005-.886-.01-1.184l-.003-.177c-.004-.2-.006-.342-.006-.453l.06-.026a12.27 12.27 0 0 1 1.327-.469q.146-.042.234-.06l.018-.005.018.004q.088.02.234.06a12 12 0 0 1 1.387.495c0 .111-.002.254-.006.455l-.003.176c-.005.299-.01.684-.01 1.184 0 .648-.38 1.125-.874 1.48a3.8 3.8 0 0 1-.747.416m-.21999999999999975.08400000000000007"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareTouchIdPrivateOutline;