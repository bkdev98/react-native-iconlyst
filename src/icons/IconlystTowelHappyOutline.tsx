import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTowelHappyOutline = ({
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
      d="M4.504 5.143c-.238.224-.28.384-.28.472 0 .089.042.249.28.473.239.226.625.464 1.164.68 1.075.43 2.61.713 4.345.713s3.27-.283 4.344-.713c.54-.215.926-.454 1.165-.68.237-.224.279-.384.279-.473s-.042-.248-.28-.473c-.238-.226-.624-.464-1.164-.68-1.074-.43-2.61-.712-4.344-.712s-3.27.283-4.345.713c-.539.215-.925.454-1.164.68M5.11 3.07c1.292-.517 3.026-.82 4.902-.82s3.61.303 4.902.82c.643.258 1.215.583 1.637.983.425.4.749.929.749 1.562 0 .634-.324 1.162-.749 1.563-.422.4-.994.725-1.637.983-1.292.517-3.025.82-4.902.82-1.876 0-3.61-.303-4.902-.82-.644-.258-1.215-.583-1.638-.983-.424-.401-.748-.929-.748-1.563s.324-1.161.748-1.562c.423-.4.994-.726 1.638-.983"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.475 4.865a.75.75 0 0 1 .75.75v12.77c0 .088.041.248.279.473.239.226.625.464 1.164.68 1.075.43 2.61.712 4.345.712s3.27-.283 4.345-.712c.539-.216.925-.454 1.164-.68.237-.224.279-.384.279-.473V5.615a.75.75 0 0 1 1.5 0v12.77c0 .634-.324 1.162-.749 1.563-.422.4-.994.725-1.637.982-1.292.517-3.025.82-4.902.82-1.876 0-3.61-.303-4.902-.82-.644-.257-1.215-.582-1.638-.982-.424-.401-.748-.929-.748-1.563V5.615a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.874 5.262a.75.75 0 0 1-.524.922 4.96 4.96 0 0 1-2.657 0 .75.75 0 1 1 .395-1.447c.63.172 1.248.17 1.864 0a.75.75 0 0 1 .922.525M7.81 11.335a.75.75 0 0 1 .75.75v.032a.75.75 0 0 1-1.5 0v-.032a.75.75 0 0 1 .75-.75M11.97 11.335a.75.75 0 0 1 .75.75v.032a.75.75 0 0 1-1.5 0v-.032a.75.75 0 0 1 .75-.75M7.71 14.894a.75.75 0 0 1 1.051.139c.325.423.776.657 1.252.657.474 0 .927-.234 1.252-.657a.75.75 0 1 1 1.19.913c-.575.748-1.447 1.244-2.442 1.244s-1.868-.496-2.442-1.244a.75.75 0 0 1 .138-1.052"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.66 3.001a.75.75 0 0 1 .75-.75h10.507a.75.75 0 0 1 .715.976c-.11.345-.3.663-.421.865q-.052.084-.081.138c-.104.192-.19.4-.19.796 0 .484.124.69.305.992l.005.008c.233.389.524.879.524 1.778 0 .9-.29 1.389-.524 1.778l-.005.009c-.181.302-.304.507-.304.992 0 .489.124.696.305.999l.005.008c.232.389.523.879.523 1.778 0 .897-.291 1.385-.524 1.772l-.004.008c-.181.302-.305.509-.305.998 0 .407.088.617.196.813q.031.055.08.135c.125.208.323.534.433.908a.75.75 0 0 1-.72.962H16.55a.75.75 0 0 1 0-1.5h3.163c-.156-.337-.271-.747-.271-1.318 0-.899.29-1.389.523-1.777l.005-.009c.182-.302.305-.507.305-.992 0-.49-.124-.697-.306-1l-.005-.008c-.232-.389-.522-.878-.522-1.777 0-.897.29-1.386.523-1.773l.004-.007c.181-.302.306-.51.306-1 0-.489-.125-.696-.306-.998l-.004-.007c-.232-.387-.523-.876-.523-1.772 0-.546.106-.945.253-1.275H10.41a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTowelHappyOutline;