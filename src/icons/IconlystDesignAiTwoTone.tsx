import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDesignAiTwoTone = ({
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
      d="M11.656 3A2.447 2.447 0 0 0 9.21 5.447l.238 1.971a2.02 2.02 0 0 1-2.005 2.264H5.77c-.94 0-1.704.761-1.706 1.702v.006a1.71 1.71 0 0 0 1.71 1.715H17.55a1.71 1.71 0 1 0-.003-3.42l-1.673.003a2.017 2.017 0 0 1-2.006-2.255l.236-1.986A2.447 2.447 0 0 0 11.656 3M9.403 20.335c-2.33 0-4.735-.003-4.743-.005-.516-.122-.735-.653-.46-1.104.07-.114 1.063-1.508.977-3.651v-2.463"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.661 5.499v-.01M17.436 20.767l.098-.263a3.62 3.62 0 0 1 2.14-2.143l.262-.097-.263-.098a3.62 3.62 0 0 1-2.14-2.142l-.097-.264-.097.264a3.62 3.62 0 0 1-2.14 2.142l-.263.098.263.097a3.62 3.62 0 0 1 2.14 2.143zM11.459 18.264a2.01 2.01 0 0 1 1.335-1.338 2.01 2.01 0 0 1-1.335-1.337 2.01 2.01 0 0 1-1.336 1.337c.64.195 1.141.697 1.336 1.338"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.01 21h.01"
    />
  </Svg>
);
export default IconlystDesignAiTwoTone;
