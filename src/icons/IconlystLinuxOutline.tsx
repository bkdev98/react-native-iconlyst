import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLinuxOutline = ({
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
      d="M10.605 7.063a.75.75 0 0 1 .75.75v1.785a.75.75 0 1 1-1.5 0V7.812a.75.75 0 0 1 .75-.75M13.396 7.063a.75.75 0 0 1 .75.75v1.785a.75.75 0 1 1-1.5 0V7.812a.75.75 0 0 1 .75-.75M13.646 10.68a.75.75 0 0 1 1.016.305 10.1 10.1 0 0 1 .924 7.117.75.75 0 1 1-1.459-.349 8.6 8.6 0 0 0-.787-6.058.75.75 0 0 1 .306-1.016M10.355 10.68a.75.75 0 0 1 .306 1.015 8.6 8.6 0 0 0-.787 6.058.75.75 0 0 1-1.46.348 10.1 10.1 0 0 1 .925-7.116.75.75 0 0 1 1.016-.306"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 4.379a3.436 3.436 0 0 0-3.436 3.436v.275c0 2.095-.654 4.138-1.872 5.843l-.134.187v.001c-.141.2-.211.44-.2.684a.75.75 0 0 1-1.499.066 2.6 2.6 0 0 1 .474-1.617l.002-.003.136-.19A8.55 8.55 0 0 0 7.064 8.09v-.275a4.936 4.936 0 0 1 9.873 0v.275c0 1.783.557 3.52 1.593 4.971l.138.193c.333.472.5 1.04.474 1.617a.75.75 0 1 1-1.499-.066 1.1 1.1 0 0 0-.2-.685l-.134-.187a10.05 10.05 0 0 1-1.872-5.843v-.275A3.436 3.436 0 0 0 12 4.38M13.961 18.327l.046.029c.329.205.707.319 1.095.33a.75.75 0 0 1-.042 1.5 3.7 3.7 0 0 1-1.847-.558l-.002-.001-.048-.03a2.19 2.19 0 0 0-2.325 0l-.05.03a3.7 3.7 0 0 1-1.847.558.75.75 0 1 1-.042-1.5c.387-.01.765-.124 1.094-.329l.046-.03a3.69 3.69 0 0 1 3.922 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.273 8.53c.45-.259 1.004-.259 1.454 0l1.617.936c.867.5.979 1.709.218 2.36l-1.617 1.386a1.45 1.45 0 0 1-1.89 0l-1.618-1.386c-.76-.651-.649-1.86.218-2.36zM12 9.844l-1.536.888L12 12.046l1.536-1.315zM18.042 13.612c.229.039.426.144.58.294.103.1.176.21.227.31.146-.086.316-.16.497-.207.348-.09.88-.104 1.315.31l.002.002c.639.612.486 1.426.342 1.857l-.016.052a1.8 1.8 0 0 1 .344.229c.27.241.417.576.417.985 0 .448-.21.87-.57 1.14l-.017.011-2.818 1.994a2.695 2.695 0 0 1-3.765-3.78l.004-.004 2.004-2.63c.236-.313.759-.707 1.453-.563m-.42599999999999993 1.6880000000000002L15.78 17.71a1.195 1.195 0 0 0 1.675 1.672l.017-.013 2.669-1.888a1.23 1.23 0 0 1-.61-.664c-.134-.37-.066-.76.052-1.114a1 1 0 0 0 .048-.207.4.4 0 0 0-.072.046c-.148.138-.297.26-.448.349-.14.083-.366.19-.643.17a.9.9 0 0 1-.683-.396 1.3 1.3 0 0 1-.168-.366M5.958 13.612c-.229.039-.426.144-.58.294-.103.1-.176.21-.227.31a2 2 0 0 0-.497-.207c-.348-.09-.88-.104-1.315.31l-.002.002c-.639.612-.486 1.426-.342 1.857l.016.052a1.7 1.7 0 0 0-.344.229c-.27.241-.417.576-.417.985 0 .448.21.87.57 1.14l.017.011 2.818 1.994a2.695 2.695 0 0 0 3.765-3.78l-.004-.004-2.004-2.63c-.236-.313-.759-.707-1.454-.563m.42599999999999993 1.6880000000000002L8.22 17.71a1.195 1.195 0 0 1-1.675 1.672l-.017-.013-2.669-1.888c.158-.084.465-.268.61-.664.134-.37.066-.76-.052-1.114a1 1 0 0 1-.048-.207.4.4 0 0 1 .06.036l.012.01c.148.138.297.26.448.349.14.083.366.19.643.17a.9.9 0 0 0 .683-.396c.093-.135.142-.277.168-.366"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLinuxOutline;