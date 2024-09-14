import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNeuralNetworkOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.146 13.395a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m-2.75-1.25a2.75 2.75 0 1 0 5.5 0 2.75 2.75 0 0 0-5.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.896 12.145c0 .414.335.75.75.75h2.5a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0-.75.75M18.392 3.994a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2.5 1a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.599 5.665a.75.75 0 0 1-.06 1.059l-2.89 2.58a.75.75 0 0 1-1-1.119l2.891-2.58a.75.75 0 0 1 1.059.06M18.392 20.294a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-2.5-1a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.599 18.624a.75.75 0 0 0-.06-1.06l-2.89-2.58a.75.75 0 0 0-1 1.119l2.891 2.58a.75.75 0 0 0 1.059-.06M9.498 21.839a.75.75 0 0 1-.694-.067l-4.171-2.728a.75.75 0 0 1-.34-.628V15.87l-1.678-.862a.75.75 0 0 1-.407-.667V9.948a.75.75 0 0 1 .407-.667l1.678-.862V5.877a.75.75 0 0 1 .34-.628l4.17-2.732a.75.75 0 0 1 .696-.066l2.743 1.125a.75.75 0 0 1 .466.694v15.754a.75.75 0 0 1-.466.695zm1.71-2.318V4.772l-1.913-.785-3.502 2.294v2.595a.75.75 0 0 1-.407.667l-1.678.862v3.477l1.678.863a.75.75 0 0 1 .407.667v2.597l3.502 2.291z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.57 11.734a.75.75 0 0 1-1.045.18L8.731 9.938a.75.75 0 0 1 .866-1.225l2.794 1.974a.75.75 0 0 1 .18 1.046M4.404 15.089a.75.75 0 0 1 1.01-.324l1.728.888 1.563-.876a.75.75 0 1 1 .733 1.31l-1.915 1.071a.75.75 0 0 1-.71.013L4.73 16.099a.75.75 0 0 1-.325-1.01"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNeuralNetworkOutline;
