import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLikeDislike1Outline = ({
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
      d="M10.401 13.359h-3.1a3.6 3.6 0 0 1-1.669-.216 2.03 2.03 0 0 1-.912-.912 3.6 3.6 0 0 1-.215-1.67V7.596q-.014-.324.043-.64.061-.273.2-.515.165-.262.384-.48c.8-.867 1.864-2.036 2.5-2.788a1.28 1.28 0 0 1 1.321-.406 1.57 1.57 0 0 1 1.059.76c.37.86.4 1.831.08 2.713h.23a4.6 4.6 0 0 1 2.368.326c.5.3.866.778 1.026 1.339.112.8.008 1.615-.3 2.362l-.266.983c-.08.459-.253.898-.505 1.29a2.07 2.07 0 0 1-.869.667 3.5 3.5 0 0 1-1.375.152M8.678 4.265c-.648.752-1.667 1.87-2.422 2.69-.1.11-.194.212-.209.238a1.2 1.2 0 0 0-.042.4v2.967c-.023.334-.004.67.056 1a.54.54 0 0 0 .241.24q.497.09 1 .056h3.1q.41.025.814-.042a.57.57 0 0 0 .24-.184q.172-.372.252-.774l.264-.973a5 5 0 0 0 .3-1.572.8.8 0 0 0-.354-.463 5 5 0 0 0-1.6-.112h-.99a.885.885 0 0 1-.884-1.213c.532-1.656.315-2.16.266-2.243zM17.196 21.262h-3.1a3.5 3.5 0 0 1-1.38-.153 2.07 2.07 0 0 1-.87-.667 3.5 3.5 0 0 1-.505-1.292l-.262-.969a4.56 4.56 0 0 1-.3-2.375A2.3 2.3 0 0 1 11.8 14.47a4.6 4.6 0 0 1 2.373-.328h.23a3.68 3.68 0 0 1 .08-2.714 1.56 1.56 0 0 1 1.06-.758 1.26 1.26 0 0 1 1.27.352c.74.866 1.9 2.137 2.533 2.823q.228.229.4.5.14.242.2.514.058.317.043.64v2.965a3.6 3.6 0 0 1-.216 1.671 2.03 2.03 0 0 1-.913.912c-.53.203-1.101.276-1.665.215m-3.024-5.62a5 5 0 0 0-1.6.114.8.8 0 0 0-.351.462c.014.537.115 1.068.3 1.572l.263.97q.082.403.253.776a.6.6 0 0 0 .242.184q.403.069.812.042h3.1c.334.024.67.005 1-.056a.53.53 0 0 0 .242-.239q.091-.496.057-1v-2.966c0-.139 0-.28-.007-.314a1.2 1.2 0 0 0-.23-.31 121 121 0 0 1-2.434-2.707l-.043.017c-.05.084-.267.587.266 2.243a.885.885 0 0 1-.882 1.214zM3.25 13.14a.75.75 0 0 1-.75-.75V7.47a.75.75 0 1 1 1.5 0v4.923a.75.75 0 0 1-.75.749M21.25 21.043a.75.75 0 0 1-.75-.75v-4.922a.75.75 0 1 1 1.5 0v4.921a.75.75 0 0 1-.75.751M19.335 8.301a.75.75 0 0 1-.487-1.32l1.01-.864a.75.75 0 0 1 .976 1.141l-1.012.863a.74.74 0 0 1-.487.18M4.249 18.466a.75.75 0 0 1-.487-1.322l1.01-.862a.75.75 0 1 1 .976 1.14l-1.012.863a.75.75 0 0 1-.487.18M16.827 6.471a.75.75 0 0 1-.706-1l.448-1.252a.75.75 0 0 1 1.412.505l-.448 1.252a.75.75 0 0 1-.706.495M7.324 20.682a.746.746 0 0 1-.706-1.002l.447-1.252a.75.75 0 1 1 1.412.5L8.03 20.18a.75.75 0 0 1-.706.502"
    />
  </Svg>
);
export default IconlystThumbLikeDislike1Outline;