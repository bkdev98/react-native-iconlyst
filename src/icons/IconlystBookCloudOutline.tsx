import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookCloudOutline = ({
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
      d="M7.28 3.75a1.84 1.84 0 0 0-1.842 1.841v10.19a3.2 3.2 0 0 1 1.737-.505h.565V3.75zm1.96 0h9.13a.45.45 0 0 1 .449.449v.43a.75.75 0 1 0 1.5 0v-.43A1.95 1.95 0 0 0 18.37 2.25H7.28a3.34 3.34 0 0 0-3.342 3.341v12.922a3.236 3.236 0 0 0 3.237 3.237h11.202a1.95 1.95 0 0 0 1.949-1.943v-.003l-.007-3.778v-1.045a.75.75 0 0 0-1.5 0v.295H9.24zm-.768 13.026H18.82l.006 3.029a.45.45 0 0 1-.45.445h-11.2a1.736 1.736 0 1 1 0-3.474zm5.476-10.183c.476-.63 1.246-1.134 2.33-1.134s1.855.504 2.332 1.134c.28.37.462.787.56 1.175.44.105.847.315 1.179.632.5.477.779 1.148.779 1.925a2.64 2.64 0 0 1-1.579 2.417 2.9 2.9 0 0 1-1.041.207h-4.461a2.8 2.8 0 0 1-1.066-.221 2.64 2.64 0 0 1-1.552-2.403c0-.777.28-1.449.78-1.925.332-.317.74-.527 1.178-.632.098-.388.28-.804.56-1.175m1.196.905c-.25.33-.345.727-.345.942a.75.75 0 0 1-.744.75c-.351.003-.628.12-.81.295-.177.169-.316.435-.316.84 0 .455.268.849.657 1.03.176.07.348.094.46.094h4.462c.115 0 .289-.024.467-.093.386-.18.652-.575.652-1.03 0-.406-.137-.673-.314-.841-.183-.175-.459-.292-.81-.295a.75.75 0 0 1-.744-.75c0-.214-.096-.612-.345-.942-.227-.3-.573-.54-1.136-.54s-.908.24-1.134.54"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBookCloudOutline;
