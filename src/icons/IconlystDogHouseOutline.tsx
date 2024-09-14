import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDogHouseOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M17.21 22.047H6.78c-2.25 0-4.07-1.83-4.07-4.07v-7.17c0-1.12.5-2.17 1.37-2.88l5.58-4.54a3.72 3.72 0 0 1 4.69 0l5.57 4.54c.87.71 1.37 1.76 1.37 2.88v7.17c0 2.25-1.83 4.07-4.07 4.07zm-5.22-18c-.5 0-.99.17-1.4.5l-5.58 4.54c-.52.42-.81 1.05-.81 1.72v7.17a2.57 2.57 0 0 0 2.57 2.57H17.2a2.57 2.57 0 0 0 2.57-2.57v-7.17c0-.67-.3-1.29-.82-1.72l-5.57-4.54c-.41-.33-.9-.5-1.4-.5z"
    />
    <Path
      fill={props.color}
      d="M15.42 17.616c-.78 0-1.45-.47-1.74-1.15h-3.37c-.29.67-.96 1.15-1.74 1.15a1.9 1.9 0 0 1-1.59-2.94 1.9 1.9 0 0 1 1.59-2.94c.78 0 1.45.47 1.74 1.15h3.37c.29-.67.96-1.15 1.74-1.15a1.9 1.9 0 0 1 1.59 2.94c.2.3.31.66.31 1.04 0 1.04-.85 1.9-1.9 1.9m-5.71-2.65h4.56c.41 0 .75.34.75.75 0 .22.18.4.4.4s.4-.18.4-.4c0-.18-.12-.31-.23-.36a.753.753 0 0 1 0-1.36.39.39 0 0 0 .23-.36c0-.22-.18-.4-.4-.4s-.4.18-.4.4c0 .41-.34.75-.75.75H9.71c-.41 0-.75-.34-.75-.75 0-.22-.18-.4-.4-.4s-.4.18-.4.4c0 .18.12.31.23.36a.753.753 0 0 1 0 1.36.39.39 0 0 0-.23.36c0 .22.18.4.4.4s.4-.18.4-.4c0-.41.34-.75.75-.75"
    />
  </Svg>
);
export default IconlystDogHouseOutline;
