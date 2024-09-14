import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayCircleAddOutline = ({
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
      d="M3.94 4.343c.95-1.02 2.305-1.591 3.903-1.591h5.297a.75.75 0 0 1 0 1.5H7.843c-1.226 0-2.168.429-2.807 1.114C4.392 6.058 4 7.071 4 8.33v7.632c0 1.26.39 2.273 1.034 2.964.637.685 1.578 1.114 2.809 1.114h8.099c1.23 0 2.173-.429 2.81-1.114.644-.691 1.035-1.704 1.035-2.964v-4.829a.75.75 0 0 1 1.5 0v4.83c0 1.569-.491 2.97-1.437 3.985-.951 1.022-2.306 1.592-3.908 1.592h-8.1c-1.6 0-2.956-.57-3.907-1.592C2.99 18.931 2.5 17.53 2.5 15.961V8.33c0-1.57.493-2.97 1.44-3.986"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.512 10.3a17.5 17.5 0 0 0 0 3.691c.034.26.143.373.227.421.088.05.268.095.56-.02a9 9 0 0 0 2.637-1.671c.233-.217.3-.425.3-.582-.002-.158-.072-.362-.298-.569l-.003-.002a8.8 8.8 0 0 0-2.641-1.671l-.008-.003c-.238-.102-.421-.073-.529-.016-.096.05-.21.165-.245.423m1.357-1.789c-.596-.252-1.256-.254-1.814.041-.57.302-.942.867-1.032 1.562l-.001.013a19 19 0 0 0-.001 4.026l.002.014c.08.656.413 1.23.976 1.55.559.317 1.228.317 1.858.067l.006-.002a10.5 10.5 0 0 0 3.088-1.956l.003-.004c.495-.46.785-1.052.781-1.69-.003-.637-.297-1.221-.783-1.667a10.3 10.3 0 0 0-3.083-1.954M18.914 2.46a.75.75 0 0 1 .75.75v1.587h1.586a.75.75 0 0 1 0 1.5h-1.586v1.586a.75.75 0 0 1-1.5 0V6.297h-1.586a.75.75 0 0 1 0-1.5h1.586V3.21a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlayCircleAddOutline;
