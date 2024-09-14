import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileOpenBulk = ({
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
      d="M3.662 4.038C4.565 2.904 5.95 2.363 7.76 2.363h1.854c.9.002 1.75.426 2.29 1.147l.846 1.125c.258.343.663.545 1.094.547h1.53c1.526 0 2.832.326 3.775 1.107.965.8 1.427 1.974 1.456 3.4v1.063a.75.75 0 0 1-1.5 0v-1.04c-.024-1.107-.368-1.816-.913-2.268-.569-.471-1.477-.762-2.818-.762h-1.534a2.87 2.87 0 0 1-2.289-1.146l-.847-1.126a1.37 1.37 0 0 0-1.091-.547H7.76c-1.507 0-2.39.437-2.926 1.11-.564.707-.86 1.82-.86 3.408v10.094c0 .917.742 1.659 1.658 1.659a.75.75 0 1 1 0 1.5 3.16 3.16 0 0 1-3.158-3.16V8.382c0-1.724.312-3.245 1.187-4.343"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M4.883 20.884a.75.75 0 0 1 .75-.75c.915 0 1.658-.743 1.658-1.66v-4.789c0-1.232.387-2.23 1.087-2.92.696-.684 1.626-.99 2.576-.99h7.358c.95 0 1.88.306 2.576.99.7.69 1.087 1.688 1.087 2.92v.01l-.063 4.789a3.16 3.16 0 0 1-3.157 3.153l-13.122-.003a.75.75 0 0 1-.75-.75"
    />
  </Svg>
);
export default IconlystFolderFileOpenBulk;
